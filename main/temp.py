import time 
import numpy as np
import re


#Sistema de ecuaciones
#El array debe estar en el orden de ax + by + cz + d= 0

sist_ecuaciones = np.array(
			[['+20*x', '1*y', '-2*z','+0*t' , '-17'],
			['+3*x', '20*y', '-1*z','+0*t' , '+18'],
			['+2*x', '-3*y', '20*z','+0*t' , '-25'],
			['+0*x', '+0*y', '+0*z','+0*t' , '+0']])
			
dimensiones =  3
			
#Obtención de los coeficientes
k_x = float(re.sub('[^0-9]', '', sist_ecuaciones[0][0]))
k_y = float(re.sub('[^0-9]', '', sist_ecuaciones[1][1]))
k_z = float(re.sub('[^0-9]', '', sist_ecuaciones[2][2]))
k_t = float(re.sub('[^0-9]', '', sist_ecuaciones[3][3]))


def jacobi4D ():
    #Comprobación de que la diagonal es mayor en la primera ec

    if k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][1])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][2])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][3])):
    	print('El coeficiente de X es el mayor')

    if k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][0])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][2])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][3])):
    	print('El coeficiente de Z es el mayor')

    if k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][0])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][1])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][3])):
    	print('El coeficiente de Y es el mayor')
    
    if k_t > float(re.sub('[^0-9]', '', sist_ecuaciones[3][0])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[3][1])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[3][2])):
    	print('El coeficiente de Z es el mayor')

    #Desepejando la variable de cada ecuación
    x_right_side = ''.join(sist_ecuaciones[0][1:5].tolist())
    y_right_side = sist_ecuaciones[1][0] + ''.join(sist_ecuaciones[1][2:5].tolist())
    z_right_side = ''.join(sist_ecuaciones[2][0:2].tolist()) + ''.join(sist_ecuaciones[2][3:5].tolist())  
    t_right_side = ''.join(sist_ecuaciones[3][0:3].tolist()) + sist_ecuaciones[3][4]

    
    #Declaración de las ecuaciones a calcular, esto como despejar x para sustiuir los datos y evaluar
    #Lo que hace lambda es calcular la función que le pasas. Cuando lo calcula asigna el resultado a la variable 
    # Es como usar esoo de def Calcular(): pero mucho más sencillo
    fx = lambda x,y,z,t: (-1*eval(x_right_side))/k_x 
    fy = lambda x,y,z,t: (-1*eval(y_right_side))/k_y  
    fz = lambda x,y,z,t: (-1*eval(z_right_side))/k_z
    ft = lambda x,y,z,t: (-1*eval(t_right_side))/k_t


    #Valores iniciales temporales
    x0 = 0
    y0 = 0
    z0 = 0
    t0 = 0

    error_referencial = float(input('Error permisible: '))	#Error provisonal, es para que entre en el while

    iteraciones = 1  #Número de iteraciones hasta lograr la respesta

    solucionado = False

    while not solucionado :
    	#Ahora se definen los valores de la iteracion X1, Y1, Z1.
        x1 = fx(x0,y0,z0,t0)
        y1 = fy(x1,y0,z0,t0)
        z1 = fz(x1,y1,z0,t0)
        t1 = ft(x1,y1,z0,t0)
        print('%d\t%0.4f\t%0.4f\t%0.4f\t%0.4f\n' %(iteraciones, x1,y1,z1,t1))
        #Se calculan los errores 
        error_x = abs(x0-x1) #Abs extrae el absoluto
        error_y = abs(y0-y1)
        error_z = abs(z0-z1)
        error_t = abs(t0-t1)
        iteraciones += 1
    
    	#Se actualizan los valores para empezar de nuevo
        x0 = x1
        y0 = y1
        z0 = z1
        t0 = t1

        #Si el error conseguido en cada ecuación es menor al relativo, entonces acaba el programa
        if(error_x < error_referencial and error_y < error_referencial and error_z < error_referencial and error_t < error_referencial):
        	solucionado = True #si los errores en cada eje es menor, entonces el problema est'a solucionado

    
    print('\nSolución: x=%0.3f, y=%0.3f, z = %0.3f y t = %0.3f\n'% (x1,y1,z1,t1))

def jacobi3D ():
    #Comprobación de que la diagonal es mayor en la primera ec
    
    if k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][1])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][2])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][3])):
    	print('El coeficiente de X es el mayor')
    
    if k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][0])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][2])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][3])):
    	print('El coeficiente de Z es el mayor')
    
    if k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][0])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][1])) and  k_z > float(re.sub('[^0-9]', '', sist_ecuaciones[2][3])):
    	print('El coeficiente de Y es el mayor')
    
    
    #Desepejando la variable de cada ecuación
    x_right_side = ''.join(sist_ecuaciones[0][1:5].tolist())
    y_right_side = sist_ecuaciones[1][0] + ''.join(sist_ecuaciones[1][2:5].tolist())
    z_right_side = ''.join(sist_ecuaciones[2][0:2].tolist()) + ''.join(sist_ecuaciones[2][3:5].tolist())  
    
    
    #Declaración de las ecuaciones a calcular, esto como despejar x para sustiuir los datos y evaluar
    #Lo que hace lambda es calcular la función que le pasas. Cuando lo calcula asigna el resultado a la variable 
    # Es como usar esoo de def Calcular(): pero mucho más sencillo
    fx = lambda x,y,z,t: (-1*eval(x_right_side))/k_x 
    fy = lambda x,y,z,t: (-1*eval(y_right_side))/k_y  
    fz = lambda x,y,z,t: (-1*eval(z_right_side))/k_z
    
    
    #Valores iniciales temporales
    x0 = 0
    y0 = 0
    z0 = 0
    
    error_referencial = float(input('Error permisible: '))	#Error provisonal, es para que entre en el while
    
    iteraciones = 1  #Número de iteraciones hasta lograr la respesta
    
    solucionado = False
    
    while not solucionado :
    	#Ahora se definen los valores de la iteracion X1, Y1, Z1.
        x1 = fx(x0,y0,z0,t0)
        y1 = fy(x1,y0,z0,t0)
        z1 = fz(x1,y1,z0,t0)
        print('%d\t%0.4f\t%0.4f\t%0.4f\n' %(iteraciones, x1,y1,z1))
        #Se calculan los errores 
        error_x = abs(x0-x1) #Abs extrae el absoluto
        error_y = abs(y0-y1)
        error_z = abs(z0-z1)
        iteraciones += 1
    
    	#Se actualizan los valores para empezar de nuevo
        x0 = x1
        y0 = y1
        z0 = z1
        	
        #Si el error conseguido en cada ecuación es menor al relativo, entonces acaba el programa
        if(error_x < error_referencial and error_y < error_referencial and error_z < error_referencial):
        	solucionado = True #si los errores en cada eje es menor, entonces el problema est'a solucionado
        		
    
    print('\Solución: x=%0.3f, y=%0.3f, z = %0.3f\n'% (x1,y1,z1))

def jacobi2D ():
    #Comprobación de que la diagonal es mayor en la primera ec
    
    if k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][1])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][2])) and  k_x > float(re.sub('[^0-9]', '', sist_ecuaciones[0][3])):
    	print('El coeficiente de X es el mayor')
    
    if k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][0])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][2])) and  k_y > float(re.sub('[^0-9]', '', sist_ecuaciones[1][3])):
    	print('El coeficiente de Y es el mayor')
    

    
    #Desepejando la variable de cada ecuación
    x_right_side = ''.join(sist_ecuaciones[0][1:5].tolist())
    y_right_side = sist_ecuaciones[1][0] + ''.join(sist_ecuaciones[1][2:5].tolist())
    
    
    #Declaración de las ecuaciones a calcular, esto como despejar x para sustiuir los datos y evaluar
    #Lo que hace lambda es calcular la función que le pasas. Cuando lo calcula asigna el resultado a la variable 
    # Es como usar esoo de def Calcular(): pero mucho más sencillo
    fx = lambda x,y,z,t: (-1*eval(x_right_side))/k_x 
    fy = lambda x,y,z,t: (-1*eval(y_right_side))/k_y  
    
    
    #Valores iniciales temporales
    x0 = 0
    y0 = 0
    
    error_referencial = float(input('Error permisible: '))	#Error provisonal, es para que entre en el while
    
    iteraciones = 1  #Número de iteraciones hasta lograr la respesta
    
    solucionado = False
    
    while not solucionado :
    	#Ahora se definen los valores de la iteracion X1, Y1, Z1.
        x1 = fx(x0,y0,z0,t0)
        y1 = fy(x1,y0,z0,t0)
        print('%d\t%0.4f\t%0.4f\n' %(iteraciones, x1,y1))
        #Se calculan los errores 
        error_x = abs(x0-x1) #Abs extrae el absoluto
        error_y = abs(y0-y1)
        iteraciones += 1
    
    	#Se actualizan los valores para empezar de nuevo
        x0 = x1
        y0 = y1
        	
        #Si el error conseguido en cada ecuación es menor al relativo, entonces acaba el programa
        if(error_x < error_referencial and error_y < error_referencial ):
        	solucionado = True #si los errores en cada eje es menor, entonces el problema est'a solucionado
        		
    
    print('\Solución: x=%0.3f, y=%0.3f \n'% (x1,y1))

#Definiendo si es 3D o 4D

if (dimensiones==4):
	jacobi4D()
elif (dimensiones==3):
	jacobi3D()
else:
    jacobi2D()
