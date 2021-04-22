interface Person {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  address: {
    house: number;
    apartment?: {
      number: number;
      suite: Boolean;
    };
    street: string;
  };
}

const Osama: Person = undefined as any;

// optional chaining
console.log(Osama.address.apartment?.suite);

class Foo {
  // hard private - cannot be accessed through breakpoints
  #name: string;
  constructor(rawName?: string) {
    // nullish coalescing
    this.#name = rawName ?? '(no name)';
  }
  log() {
    console.log(this.#name);
  }
}

type SomeTupleType<T extends any[]> = [boolean, ...T, boolean];

// labeled tuples

type Gym = [
  tired: boolean,
  targetMuscle: string,
  hours: number,
  diet: string,
];

const Workout: Gym = [true, 'legs', 1.25, 'eggs'];

function processWorkout(...gym: Gym) {}
processWorkout(...Workout); // poor tooltip labelling of args -> use l  abelled tuples

// Recursive types

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

const val: JSONValue = {
  name: 'osama',
  address: {
    street: 7,
  },
};

function somethingRisky() {}
function isError(err: any): err is Error {
  return err instanceof Error;
}

try {
  somethingRisky();
} catch (err) {
  console.log(err.stack); // this property may or may not exist
}

// better -> use unknown as a type guard
try {
  somethingRisky();
} catch (err: unknown) {
  if (isError(err)) {
    console.log(err.stack);
  } else {
    console.log(err);
  }
}
