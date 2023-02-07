// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // create result

  // if it's a function or undefined
    // return null? undefined?

  // switch cases: typeof obj
    // case 1: 'object'
      // if obj is not null
        // if obj is an array
          // add [
          // iterate over array
          // reassign result to be result of running stringifyJSON on each item
          // if item is not the last item
            // put a comma
          // add ]
        // if obj is not an array
          // add {
          // assign handleObj to be result of running stringifyJSON on each property
          // if handleObj is not undefined,
            // add handleObj to result with a comma
          // add }

        // else
          // return 'null'

    // case 2: 'string'
    // case 3: 'boolean'
    // case 4: 'number'
    // case 5: 'bigInt'
    // case 6: 'symbol'

  // return result

};
