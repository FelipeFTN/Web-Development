
import win10toast
import numpy
import random
def schedule():

    sunday = numpy.array([['Domingo'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------']])

    monday = numpy.array([['Segunda'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------'],
                         ['-------']])

    tuesday = numpy.array([['Terça'],
                           ['-----'],
                           ['-----'],
                           ['-----'],
                           ['-----'],
                           ['-----'],
                           ['-----'],
                           ['-----'],
                           ['-----']])

    wednesday = numpy.array([['Quarta'],
                             ['------'],
                             ['------'],
                             ['------'],
                             ['------'],
                             ['------'],
                             ['------'],
                             ['------'],
                             ['------']])

    thursday = numpy.array([['Quinta'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------']])

    friday = numpy.array([['Sexta'],
                          ['-----'],
                          ['-----'],
                          ['-----'],
                          ['-----'],
                          ['-----'],
                          ['-----'],
                          ['-----'],
                          ['-----']])
  
    saturday = numpy.array([['Sabado'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------'],
                            ['------']])

    schedule = numpy.array([['Horarios'],
                            ['--13:00-'],
                            ['--13:30-'],
                            ['--14:00-'],
                            ['--14:30-'],
                            ['--15:00-'],
                            ['--15:30-'],
                            ['--16:00-'],
                            ['--16:30-']])

    for x in range(7):
        print(schedule[x], sunday[x], monday[x], tuesday[x], wednesday[x], thursday[x], friday[x], saturday[x])

    try:
       print("Os cursos selecionados a seguir precisa seguir o seguinte padrão: CursoA CursoB CursoC")

       content = input("Digite o nome das matérias que você estudará semanalmente: ")
    except:
        print("Por favor insira valores validos")

    coursesNumber = int(len(content.replace(' ', ''))/3)
    courses = content.split()
    print('Cursos escolhidos: ', courses)

    #RESOLVER BUG AO INSERIR CURSOS

    toaster = win10toast.ToastNotifier()
    toaster.show_toast("HIPPOCAMPUS","Tudo Funcionando!")

    for x in range(3):
        c = courses[random.randint(0, len(courses))]
        sunday[x] = c

    #INSERIR NA AGENDA DOMINGO[1, 3, 5]
    
    for x in range(7):
        print(schedule[x], sunday[x], monday[x], tuesday[x], wednesday[x], thursday[x], friday[x], saturday[x])

   

schedule()

