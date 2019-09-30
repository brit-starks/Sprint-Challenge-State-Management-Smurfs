1. What problem does the context API help solve?

  Context API solves the prop drilling paradigm. When apps become bigger, it becomes a bit complex and tedious passing state to different component levels.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as    a 'single source of truth' in a redux application?

    The store is a huge object in Redux where all of the state is held, this makes it easier to access state from even deep within your app. It's mainly known for it's immutability with variables and references that hold state. Because all of our data is stored within the 'store' this makes it our single source of truth.

    When we pass events to the reducer this is called an action. Due to immutability in react, we are only able to change state by passing in an action object basically describing what event 'action' is taking place and the event itself.

    The reducer is where all the magic happens, they will take the action passed, create a new state object, and modify that newly created object and send it to react so the UI updates.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state holds state that can be used in multiple components, whereas component state is more specific for that particular component. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a node package that allows us to make reducer flow asynchronous so we can make API calls from our action creators. Middlewares intercepts all actions before it gets to the reducer.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
