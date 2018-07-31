function staircasecontroller() {

    function staircase(number) {
        if (number < 1)
            return 0;
        if (number < 2)
            return 1;
        var totalways= staircase(number - 1) + staircase(number -2)
        return totalways

    }

    return {
        staircase
    }

}

module.exports = staircasecontroller();