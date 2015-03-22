---
title: "Syntax highlighting"
date: "2014-10-14"
author: fdschneider
tag:
 - log

---

Of course the lablog is supporting syntax highlighting. Since it runs without further installation on all platforms I decided to embed [highlight.js](https://highlightjs.org/). The script auto-detects the type of code, which means you just need to use Markdown code syntax, which is either inline using single backticks ( ` , e.g. `plot(cars, xlim=0x20)`) an indention of the paragraph by four spaces or a double tab. Like this:

```
For example this piece of Matlab code:

    n = 20; % number of points
    points = [random('unid', 100, n, 1), random('unid', 100, n, 1)];
    len = zeros(1, n - 1);
    points = sortrows(points);
    %% Initial set of points
    plot(points(:,1),points(:,2));

```

Alternatively, you can use fenced code blocks, which allows you to specify the language manually (not required, usualy the name of the language in small letters).

```
Or some R code

```r
library(ggplot2)

centre <- function(x, type, ...) {
  switch(type,
         mean = mean(x),
         median = median(x),
         trimmed = mean(x, trim = .1))
}
 ```
```

## Supported languages

- for Science: R, Matlab, Mathematica,  C#, C++, Python
- for writing: Markdown, Tex
- generally useful:  Bash, Makefile
- etc: Nginx, Apache, CSS, CoffeeScript, SCSS, Diff, HTML, XML, HTTP, Ini, JSON, Java, JavaScript, Objective CvPHP, Perl,Ruby, SQL ([more can be installed](https://highlightjs.org/download/))

## Examples

### Matlab

    n = 20; % number of points
    points = [random('unid', 100, n, 1), random('unid', 100, n, 1)];
    len = zeros(1, n - 1);
    points = sortrows(points);
    %% Initial set of points
    plot(points(:,1),points(:,2));
    for i = 1: n-1
        len(i) = points(i + 1, 1) - points(i, 1);
    end
    while(max(len) > 2 * min(len))
        [d, i] = max(len);
        k = on_margin(points, i, d, -1);
        m = on_margin(points, i + 1, d, 1);
        xm = 0; ym = 0;
    %% New point
        if(i == 1 || i + 1 == n)
            xm = mean(points([i,i+1],1))
            ym = mean(points([i,i+1],2))
        else
            [xm, ym] = dlg1(points([k, i, i + 1, m], 1), ...
                points([k, i, i + 1, m], 2))
        end

        points = [ points(1:i, :); [xm, ym]; points(i + 1:end, :)];
    end

    function [net] = get_fit_network(inputs, targets)
        % Create Network
        numHiddenNeurons = 20;  % Adjust as desired
        net = newfit(inputs,targets,numHiddenNeurons);
        net.trainParam.goal = 0.01;
        net.trainParam.epochs = 1000;
        % Train and Apply Network
        [net,tr] = train(net,inputs,targets);
    end

    foo_matrix = [1, 2, 3; 4, 5, 6]''';
    foo_cell = {1, 2, 3; 4, 5, 6}''.'.';


### R


```r
library(ggplot2)

centre <- function(x, type, ...) {
  switch(type,
         mean = mean(x),
         median = median(x),
         trimmed = mean(x, trim = .1))
}

myVar1
myVar.2
data$x
foo "bar" baz
# test "test"
"test # test"

(123) (1) (10) (0.1) (.2) (1e-7)
(1.2e+7) (2e) (3e+10) (0x0) (0xa)
(0xabcdef1234567890) (123L) (1L)
(0x10L) (10000000L) (1e6L) (1.1L)
(1e-3L) (4123.381E-10i)
(3.) (3.E10) # BUG: .E10 should be part of number

# Numbers in some different contexts
1L
0x40
.234
3.
1L + 30
plot(cars, xlim=20)
plot(cars, xlim=0x20)
foo<-30
my.data.3 <- read() # not a number
c(1,2,3)
1%%2

"this is a quote that spans
multiple lines
\"

is this still a quote? it should be.
# even still!

" # now we're done.

'same for
single quotes #'

# keywords
NULL, NA, TRUE, FALSE, Inf, NaN, NA_integer_,
NA_real_, NA_character_, NA_complex_, function,
while, repeat, for, if, in, else, next, break,
..., ..1, ..2

# not keywords
the quick brown fox jumped over the lazy dogs
null na true false inf nan na_integer_ na_real_
na_character_ na_complex_ Function While Repeat
For If In Else Next Break .. .... "NULL" `NULL` 'NULL'

# operators
+, -, *, /, %%, ^, >, >=, <, <=, ==, !=, !, &, |, ~,
->, <-, <<-, $, :, ::

# infix operator
foo %union% bar
%"test"%
`"test"`
```
