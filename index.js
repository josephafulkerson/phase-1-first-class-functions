function bink() {
    return ('gimme')
}

function receivesAFunction(bink) {
    return bink()
}

function returnsANamedFunction(){
    return function name (){
        return 'binkGimme'
    }
}

function returnsAnAnonymousFunction(){
    return () => {
        return 'bink'
    }
}