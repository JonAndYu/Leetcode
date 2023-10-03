function createHelloWorld() {
    
	return function(...args): string {
        // console.log("Hello World");
        return "Hello World"
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */