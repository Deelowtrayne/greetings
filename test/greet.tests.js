describe('Tests the functionality of my greetings app', function(){
  it('Checks and returns the user name (Luvuyo)', function(){
    var greeter = Greeting();
    greeter.name('Luvuyo');
    assert.deepEqual(greeter.userName(), 'Luvuyo');
  })
  it('Checks and returns the language (isixhosa)', function(){
    var greeter = Greeting();
    greeter.language('isixhosa');
    assert.deepEqual(greeter.userLang(), 'isixhosa');
  })
  it('Sets the name and language and greets the name in the given language', function(){
    var greeter = Greeting();
    greeter.name('Luvuyo');
    greeter.language('isixhosa');

    assert.deepEqual(greeter.greet(), 'Molo, Luvuyo');
  })
  it('Sets the name, adds it to a map and returns the map', function(){
    var greeter = Greeting();
    greeter.name('Luvuyo');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Luvuyo:0});
  })
  it('Sets a bunch of names, adds them to a map and returns the map', function(){
    var greeter = Greeting();
    greeter.name('Luvuyo');
    greeter.mapNames();
    greeter.name('Greg');
    greeter.mapNames();
    greeter.name('Aviwe');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Luvuyo:0, Greg:0, Aviwe:0});
  })
  it('Sets a name twice to test if the map takes reduntant data and returns the map', function(){
    var greeter = Greeting();
    greeter.name('Luvuyo');
    greeter.mapNames();
    // Luvuyo is punched in twice in this test
    greeter.name('Luvuyo');
    greeter.mapNames();
    greeter.name('Greg');
    greeter.mapNames();
    greeter.name('Aviwe');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Luvuyo:0, Greg:0, Aviwe:0});
  })
});
