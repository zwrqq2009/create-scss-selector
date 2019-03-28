# create-scss-selector
![image text](https://github.com/zwrqq2009/create-scss-selector/blob/master/create-scss-selector.gif)


------

#Installing

    npm i create-scss-selector
    
    
#Example



    import createScss from 'create-scss-selector'
    
    <div class='hello'>
        <ul>
            <li></li>
        </ul>
    </div>
    
    let dom = document.querySelector('.hello')
    let a = new createScss(dom, true)
    a.createClassTree(dom)
    
    //see your console
