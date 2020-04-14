I've learned that the biggest difference between someone that has mastered a
language, framework or tool and someone who hasn't lies in the _mental model_
they use. One person will have a clear and advanced one and the other will not.

In this article I will show you the mental models I use with React every day
that help me to solve, explain and debug even the hardest of problems.

> Whether you've been working with React for years or are just starting, having
> a useful mental models is, in my opinion, the fastest way to feel confident
> working with it.

## What's a mental model?

A mental model is how we imagine a system to work. We create one by
understanding different parts of the system and its connections, and it's
important because it helps us make sense of the world and helps us solve
problems.

A good example of a mental model is the internet: it's a complex system with
many interconnected parts, but think about the way you imagine it to work. As
for me, I imagine it as many little computers connected to each other through
many big computers. Each big computer has a directory in it with all the
website's servers and so on.

That's of course an incomplete mental model, I'd need a whole article to explain
my mental model fully, and I'm sure I don't grasp all the complexity of the
internet, but it's good enough that I can work with it, solve problems with it,
and improve it if I ever need to.

## Why are mental models important?

When I started building websites circa 2014 I had the hardest time understanding
how it all worked. Building my blog with WordPress was easy, but I had no idea
what IPs were, how to connect to a server, or how to host it.

As I limped along, reading articles and trying things out, I started to grasp
the whole system, get glimpses into how it all worked, until eventually it
"clicked" and I felt comfortable working with it. My mind was building a mental
model and every new piece information helped me to refine it.

Since then, I've built my own mental models for dozens of systems—JavaScript,
React, Webpack, they're all systems—but I've learned that we don't teach code
this way. We focus on syntax, do-s and dont's, best practices and tools.
Although that's important, we neglect teaching how to make sense of the tools we
use in an intuitive way.

Since I believe mental models are so important to take full advantage of a tool,
I'll explain (and show) the mental models I use with React, and hopefully it
will help you understand it and make you a better developer.

## React Mental Models

React helps us build complex, interactive UIs more easily than ever before by
creating a system around our apps that encourages good practices and discourages
bad ones, guiding us to create apps that are simpler to navigate and understand.

React itself is a mental model with a simple idea at its core: encapsulate
portions of your app that rely on similar logic and UI and React will make sure
that portion is always up kept up to date.

Whether you've been working with React for years or are just starting, having a
useful mental models is, in my opinion, the fastest way to feel confident
working with it.

So in order for me to transfer my mental models to you, I'll start from the
beginning: principles, and build on top of them.

## It's functions all the way down

Let's start by modeling the basic building blocks of JavaScript and React:
functions. It goes like this:

- A React component is actually a function
- Components containing other components are functions calling other functions
- Props are the function's arguments

This is hidden away by JSX, the markup language React uses. Strip away JSX and
React is a bunch of functions calling one another. JSX is in itself an applied
mental model that makes using React simpler and more intuitive.

Let's look at each part individually.

### A component is a function that returns JSX

React is used with JSX, a JavaScript extention language. The reason is that it
offers a great applied mental model for using nested functions in a way that
feels intuitive.

Let's ignore class components and focus on the far more common functional
components. A _functional_ component is a function that behaves exactly like any
other JavaScript function. React components always return JSX which is then
executed and turned into HTML.

--- Good place to show React with JSX and the output of it, which one do you
prefer to write? ---

Once JSX is transformed into JavaScript it looks like the above. You will notice
each component is a function calling another function. If you find the "normal"
code difficult to follow, you will understand why the React team decided to use
JSX.

An important feature of React and JSX is that a component can have many children
but only one parent. I found this a confusing until I realized it's the exact
same logic HTML has, where each element must be inside other elements, and can
have many children.

--- image of HTML ---

### component's props are the same as a function's arguments

We use arguments to pass information to the function when calling it, it's a way
to share information between two separate entities.

For React components we call these arguments `props` (funny story, it took me a
long time to realize props was short for _properties_). Under the hood props
behave _exactly_ like function arguments, the differences are that we interact
with them through the nicer interface of JSX, and that React gives especial
functionality to props such as `children` or `ref`.

### Creating a mental model

Let's bundle up all this knowledge together and craft a mental model to
intuitively understand functions!

When I think about a function I imagine it as a box, and that box will do
something whenever it's used/called.

--- a simple graphic with 2 + 2 = 4 return 4 in a box ---

Since a component is a fancy function, that makes a component a box as well,
with `props` as the ingredients the box needs in order to create the output.

https://lh3.googleusercontent.com/proxy/aGxUBL4uzZaGghiO3gNJx9LbFpaJHrjNMGbn67Y7WfnGF_DekKxfpmhWfXoLqkGhJUDS9bZIz1zlzKjqAZyOyX6AY0b_nEeJVfGuX-_AUW6pKBDQ2HjyPPHX2SXLeGsTk0Zn3CuEf-2E2NXgaTFM-os
https://cdn.dribbble.com/users/1986644/screenshots/4141673/dribbble_gsn118_cardboard_box.png

When a component is executed, it will run whatever logic it has, if it has any,
and return JSX. That JSX can be composed of pure elements/tags that turn into
HTML, or other components that will in turn be executed.

Since a component can have many children, but only one parent, I imagine
multiple components, one inside another, as a set of boxes. Each box must be
contained within a bigger box and can have many smaller boxes inside.

--- Image of boxes inside boxes ---

But the mental model of a component being a box is not complete without
understanding how it can interact with other boxes.

## How To Think About Closures

Closures are a core concept in JavaScript. They enable complex functionality in
the language, so they're important to understand.

They're also one of the features newcomers struggle with the most, so instead of
explaining the technicalities, I'll demonstrate my mental model of them which
simplifies them dramatically.

--- Add a visual of a closure being a box ---

I imagine a closure as a box that keeps what's inside of it from spilling out,
while allowing the things outside of it from entering, like a semi-permeable
box.

Let's go into more detail.

### But what _is_ a closure?

A closure is a feature of JavaScript functions. If you're using a function,
you're using a closure.

A function is a box, so a closure is also a box. Since each function can contain
many other function inside of it (and the same goes for components), then the
closure becomes the ability of the box to use the information outside of it,
while keeping the information inside of it from "spilling out", or being used by
the parent or container box.

--- Show image of sharing between boxes ---

That's why I imagine the boxes as _open_ boxes. The child (inner box) can see
the parent's information, but the parent (outer/container box) can't see or use
the child's.

That's the core concept of closures, and although simple, it can be exploited to
create some powerful mechanics. React takes full advantage of them.

For example, a React component is a closure, a box. You can only pass props down
from parent to child, but a child cannot pass information upward to a parent.

### Closures in React

A great example of closures in React components is updating a parent's state in
a child component. You've probably done this without realizing you were messing
around with closures.

To start, we know the parent can't access the child's information directly, but
the child can access the parent's. So we send down that info from parent to
child through `props`. In this case the information takes the shape of a
function that updates the parent's state.

Once something happens, a click or an event, the child can use that function,
and the parent's state will be updated.

--- Show code about a handle function ---

This makes it seem as if the parent had access to the child's information
somehow, but it can't. To go around this limitation we take advantage of the
fact that in closures the child can access the parent's state instead, and we
leave the work of updating it to the child.

We've discussed state in components, but how do they affect our mental model?

## Fitting React's State Into Our Mental Model

When we use a component React executes and renders it into HTML. It can render
different HTML based on two things: the props the component received and the
state it has.

With state we can control when React should re-render a component and therefore
re-execute all the code within. We do this to show new, updated information to
the user.

The idea at the core of React is simple and elegant: let it handle all rendering
so it can make it efficient and easy to deal with. After all, our apps's purpose
is to show something to the end-user. It does this by offering a simple api:
state.

In my mental model state is like a especial property inside the box. It's
independent from everything else that happens within it. It will get a default
value on first render and always be up to date with the latest value. That's the
biggest difference between variables and state.

--- Image of state in the box ---

Each variable and function is created on every render, which means their values
are also brand new. Even if a variable's value never changes, it is recalculated
and reassigned every time. That's not the case with state, it only changes when
there's a request for it to change via a `set` state event.

State follows a simple rule: Whenever it changes it will re-rendered the
component and its children. Props follow the same logic, if a prop changes, the
component will re-render, however, we can control state by modifying it, props
are more static and usually change as a reaction to a state change.

## Rendering Mental Model: how to think about React's hardest part

I consider rendering to be React's most confusing part because a lot of things
happen during rendering that aren't obvious by looking at the code. That's why
having a clear mental model really helps.

The way I imagine rendering with my imaginary boxes is two fold: the first
render brings the box into existence, that's when state is initialized. The
second part is when it re-renders, that's the box being recycled, most of it is
brand new but some important elements of it remain, namely state.

On every render everything inside a component is created, including variables
and functions, that's why we can have variables storing calculation results.
They will be recalculated on the next render. It's also why functions are not
reliable since their reference—their value per se—also changes.

--- show basic code that relies on some state to render something ---

The above will give a different result depending on the props the component
receives. Whenever props or state changes, a new render happens and code inside
a component is executed again.

However, state doesn't change, it is maintained across renders. That's why the
box is "recycled" instead of created brand new every time. Internally, React is
keeping track of each box, making sure its state is always consistent. That's
how React knows when to update a component, because when state changes it knows
to which component it belonged to.

By imagining a box being recycled I can understand what's going on inside of it.
For simple components it's easy to grasp, but the more complex a components
gets, the more props it receives, the more state it maintains, the more useful a
clear mental model becomes.

## The final mental model. Putting it all together.

Now that I've explained all the different parts of the puzzle separatedly, let's
put it all together. Here's the complete mental model I use for React
components, directly translated from how I imagine them into words.

I imagine a React component as a box.

--- A box ---

The box contains all of its own information within its walls, as well as all its
children.

A box, like a box in the real world, can have other boxes inside of it and these
boxes can in turn contain more boxes. In this way each box/component must have a
single parent, and a parent can have many children.

The boxes are self-contained, semi-permeable. They never leak anything from
inside to outside, but they can use information from the outside as if it was
belonging to them.

In React the way to share information between components is called `props`, the
same idea applies to function and then it's called `arguments`, they both work
in the same way but with a different syntax.

TK

Since information can only travel _down_ from parents to children, whenever I
need to share something between them, I imagine that piece as moving _up_ into a
bigger box that contains all the boxes that need such information, in React
jargon we're "lifting state up", but this can be applied to other things too,
such as variables or functions (this is a great way to think about Context, see
the upcoming PART 3).

The box is created on the first _render_ and that's when _state_ (and a few
other things, see the upcoming PART 2) is initialized, the box is only _created_
once, so state is also only initialized once.

Since a component is a function, on every render it gets executed again and the
box is re-created, but since it contained some important information, that's
kept safe, so I imagine it as being recycled rather than fully destroyed and
remade.

Whenever a box is recycled, so are all of its children. This can happen because
of a state change in itself, or a props change from the parent. Most
optimizations are about avoiding unnecessary renders (see PART 2).

By using these mental models I feel confident when working with React. They help
me visualize what can be a maze of code into a comprehensive mental map. It also
dimistifies React and brings it to a level I'm much more comfortable with, that
is simple JavaScript functions.

React is not that complex once you start understanding the core principles
behind it and create some ways to imagine how your code works.

?? question, if props don't change, does React still re renders? because of a
parent re-render ??

---

This was a long post with a lot of useful information. I didn't set myself to
write a "learn React basics" article but that's the article it wanted to be. I
hope it's useful to you and it was as enjoyable to read as it was to write!

I'm working on PART 2 which will go more in-depth into React's API such as
useMemo, useCallback and of course, useEffect, as well as how to use a more
advanced mental model to improve your app's performance. PART 3 will focus in
high-level features such as Context and I'll write about the exact mental model
I use for all of React.

If you'd like to read the next 2 parts please consider subscribing to my
newsletter, I only email for new articles and will never spam you.
