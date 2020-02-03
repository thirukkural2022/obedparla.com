# A Visual Guide To React Mental Models

## About me

Obed Parlapiano

- Senior Frontend Engineer at Heetch. Reimagining a legacy platform to serve the
  organization better
- Writer at obedparla.com
- Mentor Thinkful.com - where I've helped dozens of students understand code

## The real difference between experts and newcomers

I've been coding for over 10 years, and something I've learned is that
_everyone_ is learning how to code, to different degrees. Newcomers to the field
are learning the basics, and seasoned engineers are learning how to do the
basics in the absolute best way possible.

Something I've come to realize is that the biggest difference between someone
that has mastered a language, framework or tool and someone that hasn't lies not
in the fact that they know the language's syntax, have read the source code, or
know all the usecases, but instead in the _mental models_ they use to understand
the language, framework or tool.

## So what's a mental model and why is so important?

A mental model is someone's thought process that represents the way something
works in the real world. It connects the relationships between varios parts of a
system and makes sense of it, so that you get an intuitive understanding of that
system.

That sounds very fancy, a simpler a more down-to-earth explanation is to imagine
the way you think about cars. Most of us don't know the exact mechanical
principles that make a car work. I don't know what torque is, or the equation
for acceleration or velocity. I mean I can google it, but I don't need any of it
in order to drive every day.

I intuitively understand how a car works. I have a mental model of it in my
mind. If I press the gas pedal it will start accelerating, the harder I press it
the faster it will do it. It's dangerous if I do it too fast as well as if I
brake too fast. My driving instructor didn't teach me how a motor works, but
instead how to know when to switch from first to second.

The way we teach code isn't always like this. We focus on syntax, and how
something works, rather than creating a good picture in our minds about a piece
of the puzzle so that we don't have to figure it out ever again.

Do you remember trying to learn something new, but it just didn't make sense and
you ended up copying some code from StackOverflow instead? But slowly, as you
used it more and more, you somehow got to understand it? That's your mind
building a mental model about it. Everything we understand we do through mental
models, from code, to physics.

## React and Mental Models

React takes care of a lot of things for us, and sometimes it's not obvious how
it's doing it or why. If you ever looked at a component with 4 `useEffect` on
it, and wondered why on earth you picked up this task from Jira you know that it
can get unwieldy to make sense of what's going on.

This is where a good mental model about React will help. Whether you've been
working with React for years or are just starting, I will show you the Mental
Models I use with React every day that help me to solve, explain and debug even
the hardest of problems.

## It's functions all the way down

There's a story about an astronomer, that after a lecture was told by an elderly
lady that he had it all wrong, that the world actually rested on top of a
tortoise. When the astronomer cleverly replied "and what supports the tortoise?"
she lady replied: "it's turtles all the way down!"

React is functions all the way down! Every component is a function, that calls
more functions, that can in turn ... well ... call more functions! And props are
functions' arguments that you access in a more fancy way. Strip away JSX and
React is really a bunch of functions calling one another. JSX is in itself an
applied mental model to make using React simpler.

--- Good place to show React with JSX and the output of it, which one do you
prefer to write? ---

So in order for me to "transfer" the mental models I use with react to you, I'll
have to build them up from the ground up.

Something important to note: I'm a visual person, and we all are to different
levels, so when I think about a problem I see it visually in my mind and I try
to solve it visually, like machine gears turning and fitting together. You'll
see a representation of how I imagine functionality right here.

## Closures are fancy boxes

--- start with some code for some closures ---

I don't know how many times I've read or been asked about closures. It's one of
those things you have to learn about JavaScript but it really doesn't like being
understood, almost like me as a teenager.

Why are closures important? Because without them we wouldn't be able to do a lot
of complex things, and React wouldn't work the way it does, or even be possible.
Here's how I imagine a closure: it's a box. That's it.

--- Add a visual of a closure being a box ---

A closure is a box that keeps whatever is inside of it from spilling out while
allowing whatever is outside from entering. Spilling out where? Well, to the
_bigger_ box. With the biggest box being the global scope. If something lives in
the global scope, other boxes can access it, but if something lives inside a
box, only whatever is inside of it can access it.

Sounds familiar? A React component is a closure, a box. You can only pass props
down from parent to child. It's boxes all the way down!

## Giving our boxes a name: Component.

Now let's advance our mental model: let's think about React components. What is
a component? Another box. Seriously, if you take anything from this talk it's
that I _love_ boxes.

--- change visual to show "component" rather than "function's closure" ---

As you can see, the mental model didn't change that much. A basic React
component is a cube that gets data from its parent and can pass it down to its
children. Eventually that information will be used to render something, to
create HTML.

--- Good place to show data

Let's make our component more complex. What happens when we add state? Our
component has some instrinsic functionality now, it will behave in a different
way.

If state changes our component is re-rendered. Which means everything inside of
it gets re-created, including functions and variables. This is why updating
state inside the render method will cause your component to explode, since it's
updating, re-creating, updating again and so son.

The way I think about this is that whenever state changes, the original box is
thrown away and a new one is created in it's place. JavaScript or React might
optimize it, but I don't care about that because it doesn't affect the way I
have to think about it.

Thinking about it this way helps a lot with bugs and I find it to be crucial to
understand how and when to optimize a component.

## When the boxes get too slow

Speed is important for everyone, something to understand is that thrashing our
boxes and recreating them, or in React jargon re-rendering our components is
incredibly cheap in terms of resources. But sometimes our components get complex
enough, or are created in such a way that they become slow. Having a good mental
model makes improving performance a lot easier.

Whenever a component is re-rendered some information inside of it isn't lost.
The state of the component is safe because React keeps track of it. This is
especially true for Functional components, but I find that using the same mental
model for Class-based components works as well.

--- Put code that reflects a slow-rendering component. Kent C Doods code could
be useful here. ---

--- Explain code and then change to a visual representation of it ---

A lot of performance issues come from misunderstanding how React will threat a
component or group of components. Improving upon the mental model so far, a box
can have many boxes inside of it, but whenever the parent box is thrased, all
its children get trashed as well and then re-created. Again, this happens
incredibly fast, but if you have too many of them, or the user needs constant
feedback, for example when they're entering text in an input field, then
re-rendering so many elements so fast will be slow enough for the user to
notice, and _you never want the user to notice!_.

The simplest way to improve performance? Co-locate your state in such a way that
only the required components are re-rendered. In other words, change the way
your boxes connect to each other, so that they only have to be re-created when
it's absolutely necessary.

--- Show fixed code and fixed visual ---

## When our boxes get too complex

talk about useEffect
