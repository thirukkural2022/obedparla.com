## About me

Obed Parlapiano

- Senior Frontend Engineer at Heetch. Reimagining a legacy platform to serve the
  organization better
- Writer at obedparla.com
- Mentor Thinkful.com - where I've helped dozens of students learn to code

## The real difference between experts and newcomers

I've been coding for over 10 years, and something I've learned is that
_everyone_ is learning how to code in a different level. Newcomers to the field
are learning the basics, and seasoned engineers are learning how to do the
basics the best way possible.

Something I've come to realize is that the biggest difference between someone
that has mastered a language, framework or tool and someone that hasn't lies not
in the fact that they know the language's syntax, have read the source code, or
know all the use-cases, but instead in the _mental models_ they use to
understand the language, framework or tool.

## What's a mental model and why is it so important?

A mental model is someone's thought process that represents the way something
works in the real world. It connects the relationships between various parts of
a system and makes sense of it, so that you get an intuitive understanding of
that system.

That sounds very fancy, a simpler a more down-to-earth explanation is to imagine
the way you think about cars. Most of us don't know the exact mechanical
principles that make a car work. I don't know what torque is, or remember the
equation for acceleration or velocity. I mean I can google it and learn, but I
don't need any of it in order to drive my car.

That's because I intuitively understand how a car works. I have a mental model
of it in my mind. If I press the gas pedal it will start accelerating, the
harder I press it the faster I'll move. It's dangerous if I do it too fast as
well as if I brake too fast. My driving instructor didn't teach me how a motor
works, but instead how to know when to switch from first to second gear, "feel
the car" and all that juju.

We don't teach code this way. We focus on syntax, and how something works,
rather than creating a good picture in our minds about a piece of the puzzle so
that we don't have to figure it out ever again.

Do you remember trying to learn something new, but it just didn't make sense and
you ended up copying some code from StackOverflow instead? And slowly, as you
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

Something important I've learned is that having a _mostly_ correct overall
picture is enough to be great at what you do. Trying to learn the ins and outs
of a system can lead you into a rabbit hole without offering much return of
investment on your time. Instead focus on understanding just enough to
_correctly_ solve a problem, and then subsequently polish that knowledge.

I think the best example of this is when I started learning React. First I was
overwhelmed by how many things I supposedly had to learn: Webpack, Babel, React,
Redux. Back then every single React guide had Redux slapped on its title as
well. I was lucky to learn only React, and I was working with React
profesionally for over a year before ever having to touch anything close to
Redux. To this day I don't really know Redux and I don't need to. I have a
close-enough mental model of how it works that I can jump into a project with
Redux and be effective at it. If I had to implement it in my team's app for some
reason, then I should improve my mental models, but until then, why bother? I
rather learn X State or something.

## It's functions all the way down

There once was a famous astronomer, one day after giving one of his lectures, an
elderly lady told him that he had it all wrong, that the world actually rested
on top of a tortoise. When the astronomer cleverly replied "and what supports
the tortoise?" she replied: "very clever, but it's obviously turtles all the way
down!"

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
to solve it visually, as if my code was made of machine gears turning and
fitting together. I'll show you a visual representation of how I imagine code
works, and I hope it helps you build your own mental models to tackle the
difficulties of everyday React.

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
updating, re-creating, updating again and so son, you overload everything by
recreating so many boxes!

The way I think about this is that whenever state changes, the original box is
"washed" so that everything inside of it gets clean, but the box is not thrown
away, it's still there. JavaScript or React might optimize the washing, but I
don't care about that because it doesn't affect the way I have to think about
it.

Imagining it this way helps me a lot when coding new features, fixing bugs, or
optimizing performance. It also help to grasp complex components.

## When our boxes get too complex

My favorite addition to React Hooks was `useEffect`, it's also the one I had the
hardest time understanding. It's so flexible, powerful, and different from what
I was used to that it took me a while to adapt my mental models to it.

So what does `useEffect` do? Well, in a nutshell: it can change, have an effect,
on any aspect of our component. It runs when the component mounts, after every
render, and before it un-mounts.

If we ignore the un-mounting, useEffect is quite close to how a component
behaves. All of its code also runs when it mounts, and on every render. There's
a crucial difference though, useEffect runs _after_ each render. Let's translate
all of this into an updated mental model.

First let's talk about mounting. I think about mounting as the moment the box is
first created. It just comes to life and needs to do a bunch of stuff for the
first time. Take a breath, look at the sun, eat something. You know, stuff you
only have to do once. It will continue being alive until being unmounted.

And as I mentioned every render is like having a shower, it throws away the
clothes, gets clean, and puts new clothes. Sometimes very similar or the same
ones, sometimes different ones. If the prop for weather equals cold then put on
warm clothes.

If mounting is creating the box, Un-mounting is the opposite. The box is
completely thrown away. But right before doing it, some code is run, which is
usually called the clean up phase. You have to clean up after yourself before
you leave, it's good manners.

Some examples of what can do at each of these phases:

### Mounting: life is beautiful

When the component mounts is the perfect time to fetch data. That's the
quintecensial example, isn't it? You get some data and then display it in your
component. The box is created and needs to check the weather before putting
clothes on.

It's important to note that useEffect _always_ runs after rendering. This is a
crucial part of the puzzle that can make trip us up if we're not aware. Thinking
about this, does my previous example make any sense though? If the component
renders _and_ afterwards it gets data in order to render it, then our box would
actually put on some clothes before checking the weather.

I mean it makes sense doesn't it? Do you get out of bed butt naked and go
straight to the window? No, of course not, who does that? You put a bathrobe at
least, and then check the weather to put on the right clothes.

These are just examples of course, but they help me to illustrate the mental
model I have in mind when thinking about problems. Do you want your user to see
a blank page for even an instant? Do you want some static icons or images to
show without context and without data? That's why we have our famous "loading
states".

Even if we live in a perfect world and our request is done instantly, React will
still do a first render before asking for your data, so you always need to
account for that.

To summarize the mounting part: The box is created, it's shown to the user with
whatever initial information it has, whatever can be shown right away, and then
it will run useEffect, and with that any extra logic, requests, subscriptions.

But wait a second, why can't react run useEffect before it renders the
component? If we don't want or can't show anything until we have data, why
bother? To answer that, it's important to understand that we humans like
feedback. Feedback is the most important thing for our brains to interpret the
world correctly.

If we go on a website and don't see anything happening for just a second or two,
we'll assume it's broken. Even with a loading spinner, if it lasts more than a
few seconds, we'll also assume it's broken. A lack of feedback means we can't
interpret the world. So React basically forces us to _show something, anything_
before doing our fancy requests or heavy logic, since that takes _time_.

So here's my full mental model for the mounting phase: My mental component is
created, get's initialized, renders whatever it can render, and then runs the
rest of the logic, like useEffect.

Keep in mind there are always details that can be used to imagine that model,
such as the existense of useLayourEffect, which runs before rendering, and can
be used for things that the render method cannot be run without. Such as layout
sizes. As I mentioned, there's always more to learn.

## Rendering: dressing up

If I had to mention a single place where React's magic lies is in the Render
method. Being able to map through arrays and filter and do so many things right
where we show the content to the user is brilliant.

The rendering part of our component is the easier to map to a model. Whatever
the function returns will be executed by React. This means the JSX turns into
HTML, and any loops, conditionals, or other components are resolved as well.

The way I imagine it is this way: the render method is the body of my box. Is
what a user can see and interact with. Our logic before the `return` decides
what clothes we should wear: a dress or a jacket? The render is where we
actually put the clothes on. Simple right?

Where it gets really interesting is combining logic with that body, because a
user won't see conditional statements, or for loops. They see HTML in the web,
or something alike with React-native and so on. So can I make sense of all that
logic?

Since JSX is syntactic sugar for JavaScript, and it gets transformed into
regular functions when they're compiled, I use the same mental models I've shown
you so far. What the component is returning isn't HTML, it's other functions
that will tell React what HTML it should create. But again, we don't care about
the details, what matters is that everything inside your render method behaves
just like a function does. It gets evaluated in the same way.

This was in fact one of the realizations I struggled the most with. I somewhat
disassociated JSX from regular JavaScript and in my mind it was a weird form of
HTML with superpowers. But it isn't! It's actually JavaScript with a pretty
dress! To prove my point:

--- Add closured function inside JSX ---

Did you know you can have a full-blown function inside JSX? I only saw this last
year in a workshop with Max Stoiber and I was mind-blown! I know I could call a
function in JSX and get JSX back, but having an actual closure inside? Doing
actual logic? Amazing!

I've never seen this code --point to code-- being used anywhere before but
because of it I had an incomplete mental model of JSX. This proves how missing
certain pieces of the puzzle doesn't have to hinder you. I improved my mental
model but I won't use that particular code anytime soon.

In conclussion: the way I imagine rendering is that it's a function that gets
evaluated and whatever it returns React will execute and convert into HTML.

Knowing this, these code samples make sense:

-- show conditional and loops and walk through them --

And knowing that JSX is turned into a function, that calls more functions and so
on shines a light on one of React's quirks, the fact that you can't return many
elements without a parent.

--- Show code of elements trying to be returned without a parent and the React
error message ---

How should React try to solve this? It's far easier if everything _always_ has a
parent. That enables React to run one function inside another. Or a box within a
box within a box, and you know, it's boxes all the way down.

## Rerendering: we all deserve a second⁽ᴺ⁾ chance

After a component is mounted and rendered, it will likely re-render many times.
For me this was the hardest part to understand and the one that came with most
pitfalls, that's because re-rendering doesn't make our component behave any
differently, the same mental model that applies to rendering applies to this
part too. However a few things are different.

Whenever a component re-renders, _everything_ inside of it will be re-run. All
the logic is re-evaluated. All the conditionals are checked again, variables are
re-assigned, functions re-created.

// I don't like this explanation, I think the "throw the box away" idea is
better

So the way I think about re-rendering in my mental model, is to imagine my box
being updated, it's washed of everything it currently has and is left sparkling
clean, with nothing inside but the initial values, the bones that hold it
together.

Then everything inside is re-created. And when I mean everything I mean
_everything_. One of the biggest confusions I've had, is to think that functions
are somewhat static. That once I create a function it will remain like it is,
but that's not the case at all. On every re-render, React creates a brand new
function, and references to it so it can be used.

Where's the bug in this code? --- show code with a useEffect having a function
inside of its conditional/array ---. Can you see it? We're asking useEffect to
update whenever our function changes. But the function will change on _every
single render_, forcing that useEffect to run the code every time, defeating the
purpose, it's equivalent to just calling the function right away --- show code
---.

By using my mental model of "everything gets re-created" I feel safer in knowing
that the functions are brand new every time. This is what allows us to do stuff
like having variables as flags that reflect a change in state: --- show code
---.

With that in mind, there are some things that we need to hone down this mental
model.

### useMemo and useCallback - preventing functions from being recreated

Memoization is a scary word but it basically means to remember or to memorize.
By using these two hooks we ask React to please remember our function and to
avoid creating it again in each render. If I have these in my code, then I know
that whatever function or code if inside of them, won't be recreated again and I
can trust it to stay the same. It's not a guarantee that it will do so since
React might forget about it and re-create for multiple reasons.

So the code from before becomes: --- show code --- and it makes sense this time.

But what happens when our components get a bit out of hand? If you've ever had a
slow React app, it probably was caused by components that rendered too slowly,
or components that rendered far too often.

In my experience, slow components aren't that common, but ones that render too
often, or too many times are _very_ common.

### Too many renders = slow app

Did you ever create a controlled input in React, and by controlled I mean that
the input's value, is stored in state rather than by the form itself, just to
notice that entering data into the input was super slow? And then Googled "React
controlled input too slow", and ended up in some Stack Overflow plus React Docs
rabbit hole that made you realize every decision you ever took in your entire
life led to this very moment? I know I have, and I didn't quite understand why
it happened and how to avoid it.

The thing is that React is _fast_, this issue is usually caused by having state
in the wrong place, which is to say it's the code's fault and not React's.

--- Put code that reflects a slow-rendering component. Kent C Doods code could
be useful here. ---

But this isn't a problem caused by state itself, it's a problem with
re-rendering. State is storing data and nothing more. But whenever we update
that data, React will automatically re-render our component. It will take our
box, clean it up, and update it to show the latest info.

If our box has too many boxes inside of it, it means many other boxes will need
to also be updated. The more boxes, the more updates, the slower the process.

The important thing to know is that this doesn't have to be the case. We can
arrange our boxes in such a way as to tell React: "hey, this data is only
relevant to this few boxes, leave the other ones alone".

Remember, React updates our boxes from outside-in, or top-to-bottom depending on
how you imagine it. The most common way to expressed it is as a tree, with each
subsequent box being a branch, but as I've shown you I like to imagine it more
as a Russian doll, with many boxes inside one another. The idea of a tree is
very helpful when you're dealing with many components side-by-side rather than
one inside another.

--- Show React tree, there must be a good image somewhere ---

Right now this is our code: --- show code of input state with many boxes inside
--- every state change causes all components to re-render, since React doesn't
know what changed and what didn't.

Making this simple change will fix it: let's put our state inside the component
that needs it and leave the other ones out of the way. Problem solved! See it
visually now: --- add visual ---

--- nice comparison, Russian doll is very close to how I think of it, maybe
worth updating above to make this reference before ---

# Notes:

- Add also a mention to how `setState` works, and why it being async can cause
  issues. Show code similar to the form I had where I relied on didSubmit

--- This could be left out, a proof of concept rather than an integral part of
the talk ---
