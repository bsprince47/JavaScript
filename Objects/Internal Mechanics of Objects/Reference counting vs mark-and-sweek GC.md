# Reference Counting vs Mark-and-Sweep Garbage Collection (GC)
Garbage collection (GC) is the process by which a programming language runtime (like JavaScript) automatically frees up memory that is no longer in use. There are various algorithms for implementing garbage collectin, and two common ones are reference counting and mark-and-sweep. Let's break down the differences, strengths, and weaknesses of each approach.

## 1️⃣ Reference Counting GC
In reference counting garbage collection, each object in memoryhas a reference count, which tracks how many refrences (or pointers) there are to the object. When an object's reference count reaches zero (i.e. there are no active references to it), the object is considered unreachable and is garbage collected.

### How it works
1. Every object has an associated counter that tracks how many other objects or variables are referring to it.
2. Each time a new reference to the object is created, the reference count is incremented.
3. Each time a refrence is removed (like when a variable goes out of scope), the reference count is decremented.
4. When the reference count reaches zero, the object is no longer referenced and can be safely deallocated.

#### Advantages of Reference Counting
- **Real-time collection**: The garbage collector runs immediately when an object's reference count drops to zero, so mermory is reclaimed quickly and incrementally.
- **Low overhead**: It doesn't require scanning all object in memory, just the reference counts, which can make it efficient in certain use cases.

#### Disadvantages of Reference Counting:
- **Cyclic dependencies**: Reference counting cannot handle circular references. For example, if two objects reference each other but no one else references them, their reference count will never reach zero. As a result, they will not be collected, causing meamory leaks.

- **Overhead of reference updates**: Every time a reference is created or removed, the reference count must be updated, which can introduce overhead.


## 2️⃣ Mark-and-Sweep GC
Mark-and-sweep is a more sophisticated garbage collection algorithm that works by marking all the objects that are reachable from the root (the objects that are accessible directly from the program) and then sweeping away the unreachable objects.

### How it works
1. **Mark Phase:** The GC starts from a set of root objects (variables that are directly accessible in the program) and recursively marks all objects that are reachable from these roots. These marked objects are considered alive or in use.
2. **Sweep Phase:** After all reachable objects are marked, the GC then sweeps through the memory, deallocating any objects that are not marked as in use.

This algorithm can handle cyclic references since it doesn't rely on reference counts. Instead, it looks at the actual reachability of objects.

#### Advantages of Mark-and-Sweep
- **Handles cyclic references**: Unlike reference counting, mark-and-sweep can detect and collect objects that reference each other in cycles, which eliminates memory leaks caused by circular references.
- **No reference count overhead**: There is no need to maintain and update reference counts, so there is less overhead when adding or removing references.

#### Disadvantages of Mark-and-Sweep
- Pause times: Mark-and-sweep can cause longer puases in the program because it needs to stop execution to mark and sweep unreachable objects, especially in large programs with many objects.
- Memory overhad: Mark-and-sweep requires additional memory to track marked objects, which can be a problem in environments with limited memory.
- Less incremental: Since it works by scanning the entire object graph, it typically cannot be done incrementally.