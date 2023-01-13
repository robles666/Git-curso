# *Git Curso Bootcamp*

[Git curso Bootcamp]()

> Apuntes de curso de OpenBootcam



[13/01/2023]

[![Git](https://img.shields.io/badge/Git-2.37+-f14e32?style=for-the-badge&logo=git&logoColor=white&labelColor=101010)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Web-blue?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/)
[![OpenBootcam](https://img.shields.io/badge/OpenBootcamp-Web-blue?style=for-the-badge&logo=openbootcamp&logoColor=White%labelColor=101010)](https://open-bootcamp.com/) 

1_ Introduccion a los sistemas de control de versiones

    https://windows.github.com [para_windows]
    https://mac.github.com [para_mac]
    https://git-scm.com [plataforma]

2_  [Configuracion de herramientas]

    git config --global user.name ["name"]
    git config --global user.mail ["email_address"]
    git config --global color.iu auto
    git config --global core.autocrlf True
    git config --global -n                  (ver opciones de configuraciones GIT)
    git config --global -e                  (ver configuracion existente)

3_ [Crear repositorios]

    git init [project_name]
    git clone [url]

4_ [Ver efectuar cambios]

    git status
    git status -s
    git diff
    git diff --stagged
    git add [file]
    git reset [file]
    git log --oneline
    git commit -m ["Description_message"]

5_ [Cambios grupales]

    git branch
    git branch [branch_name]
    git branch -d [branch_name]     (borra rama especificada)
    git checkout [branch_name]      (crea un nueva rama)
    git merge [branch]

6_ [Refactorizacion]

    git rm [file]                           (elimina)
    git rm --cached [file]
    git rm [file_original] [file_renamed]

7_ [Guardar Fragmentos]

    git stash       (almacena temporalmente los archivos tracked modificados)
    git stach pop   (restaura los archivos guardados mas recientes)
    git stash list  (enumera todos los sets de cambios en guardado rapido)
    git stash drop  (elimina set de cambios en guardado rapido mas reciente)

8_ [Repasar historial]

    git log
    git log --follow [file]
    git log --oneline
    git diff [first_branch]...[second_branch]
    git show [commit]

9_ [Rehacer commit]

    git reset [commit]
    git reset --hard [commit]

10_ [Sincronizar cambios]

    git fetch [bookmark]
    git merge [bookmark] [branch]
    git push [alias] [branch]
    git pull
