# How React Works Behind The Scenes

<p>In this project i see how renders work behind the scenes. Before the "<Tab>" component complately destroyed from DOM each "<Tab>" component has same state without change. When i click the "<DifferentContent>" this component conditionally rendering instead of "<Tab>" component. So "<Tab>" component and it's state complately destroyed. After, when i click the one of "<Tab>" component its state complately reset. Thats about **"Fiber Tree"**. To fix this behaviour between each "<Tab>" Component we have **key** prop </p>
