# 1) Not using Generics: 
```typescript
function identityString(value1: string) : string{
    return value1;
}
function identityNumber(value1 : number) : number{
    return value1;
}
```
Here, we need to repeat function hundreds of times, which is time consuming & creating a focus loss while doing long projects. 
So we will use Generics here:
```typescript
function identityElement<T>(value11 : T) : T{
    return value11;
}
```
# 2) Not using Generics:
```typescript
function identity(value2 : any) : any{
    return value2;
}
```
Here,The absence of Generics destroys one of the fundamental benifits of TypeScript. And that is "type safety". We can pass specific type of input such as number, but we can't definite the type of output using any type. We won't be able to control the type of output we required. 
So we will use Generics here:
```typescript
function identity<R>(value22 : R) : R {
    return value22;
}
```
# 3) Normal using of Generics:
```typescript
function returnLength<S>(value3 :S[]) : number{
    return value.length;
}
```
As length property exists when I will give an array as input, and the type of length is definitely a number, so if we get an array input, it will be perfect. But if i don't get an array as input, still my project code should work, so we can extend the Generic type. 
Extending Generic Type:
```typescript
function returnlength<S extends {length : number}>(value33 : S): number{
    return value33.length;
}
```
# 4) Using Generics in interface:
```typescript
interface GenericIdentityFn<Type>{
    val : Type;
}
const name: GenericIdentityFn<string> = {val : "Sofia"};
const age : GenericIdentityFn<number> = {val : 25}; 
```
So, that is how one became string type interface, one became number type interface. In that way, it has become a reusable interface. We can use the interface format in any required data type for the output. 
# 5) Multiple arguments passing thorough Generics:
```typescript
function mergeObjects<U,V>(obj1: U, obj2 : V): U & V {
    return{...obj1,...obj2};
}
const merged = mergeObjects({name : "Alice"},{age : 30});
console.log(merged);
```
So, upto this explanation in this blog, I have hold a torch on how Generics allows me to create reusable function, flexible input taking - definite output passing,building type safe components. In simple words, just alike variable is a placeholder for changing values, Generics is a placeholder for changing DataTypes, ensuring type safety without any loss of information.
Here ends some of my conceptual breakdown about Generics in TypeScript. Thank you for reading this blog.

