import sensor, image, time
from pyb import UART

uart = UART(3, 115200)

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)
sensor.set_auto_gain(False)  # 必须关闭此功能，以防止图像冲洗
clock = time.clock()

a = 0
while(True):
    clock.tick()
    img = sensor.snapshot()
    img.lens_corr(1.8) # 1.8的强度参数对于2.8mm镜头来说是不错的。
    for code in img.find_qrcodes():
        img.draw_rectangle(code.rect(), color = (255, 0, 0))
        print(code)
        print(code.payload())
        if ((code.payload()=='123') & (a == 0)):
            while(True):
                uart.write("Hello BearPi!\r\n")
                time.sleep_ms(1000)
            a+=1
        print(a)
    #print(clock.fps())
