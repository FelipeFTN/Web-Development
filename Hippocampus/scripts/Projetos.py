#HIPPOCAMPUS MAIN FUNCTION TEST
#Felipe Tenório, Gabriel Farias, Lucas Silva
import os
import random
import numpy
accountLogged = False

        #USUARIO LOGADO
def Logged():
        os.system("cls")
        print("")
        print("Conta Logada com Sucesso!")
        print("")

        import Schedule
   
        
        #LOGIN E REGISTRO
print("...........................")
print(" BEM VINDO AO HIPPOCAMPUS")
print("...........................")

if (accountLogged == True):
    Logged()

while accountLogged == False:
    print("")
    print("[I]niciar Sessão")
    print("[C]riar Conta")
    print("")

    loginChoice = input("> ").upper()


    if (loginChoice == 'I'):
        login = input("Insira sua ID: ").strip()
        if (os.path.exists("AccountsLogs.txt")):
            loginCheck = open("AccountsLogs.txt", "r")
            for x in loginCheck:
                if (x == login + "\n"):
                    Logged()
                    accountLogged = True
        else:
            print("\n Nenhum Log foi Registrado!")


    if (loginChoice == 'C'):
        login = input("Insira uma ID: ")
        if (os.path.exists("AccountsLogs.txt") == False):
            loginCreator = open("AccountsLogs.txt", "x")
        loginCreator = open("AccountsLogs.txt", "a")
        loginCreator.write(login + "\n")
        loginCreator.close()