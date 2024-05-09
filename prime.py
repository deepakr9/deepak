def prime(number):
        i=2
        for i in range(2,number):

            if number % i == 0:

                isprime = False
                break
            else:
                isprime = True
                break
        if (isprime):
            print(f"{number} is a prine" )
        else:
            print(f"{number} is not a prime")
            
   
