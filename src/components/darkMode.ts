
// window.matchMedia('(prefers-color-scheme: dark)').matches)
//('theme' in localStorage)

export const darkMode = () =>{

    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        localStorage.theme = 'light'
    }else{
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
     

}