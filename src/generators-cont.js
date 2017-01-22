console.log('------------ Advanced Generators ---------------------------------------------------------------------------');

class Comment {
    constructor(content, children) {
        this.content = content;
        this. children = children;
    }
    
    *[Symbol.iterator]() {
        yield this.content;
        
        for (let child of this.children) {
            yield* child;
        }
    }
}

const childofChild = [
    new Comment('New comment', [])
]

const children = [
    new Comment('Good comment', childofChild),
    new Comment('Bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree ) {
    values.push(value);
}

console.log('------------ Using generators to iterate over a comples data tree structure.');
console.log(values);
