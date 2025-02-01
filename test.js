function() {
    var c = this;
    c.display = function () {
        var property = "";
        c.data.message = (c.data.sometext) ? 'Hello ' + c.data.sometext + '!' : '';
        for (property in c.data) {
            console.log('c.data.' + property + ": " + c.data[property]);
        }
    }

    c.display();
}