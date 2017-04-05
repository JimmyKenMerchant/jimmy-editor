=== Jimmy Editor ===
Contributors: Kenta Ishii
Requires at least: WordPress 4.8-trunk
Tested up to: WordPress 4.7.3
Version: 0.9.8 Beta
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Jimmy Editor is a plugin for patching default editors of WordPress. The beginning of this plugin was from my thought, "how can I use the tab key to insert a indent on Post Editor (Text Mode) as well as Plugin and Theme Editor?" This is resolved by "post-editor-patch.js", because this issue is derived from ID-naming for "textarea" tag. In addition, I tried to make some editorial functions: "Line number detection", "search, replace and delete of the word in the text" and "style changer for the text area" are considered. Plus, I also considered some movable interface for these functions on internet browsers. I named my movable interface to "Sticker Box". It's not only like the window system on your PC, but able to work on your tablet or phone. I can say that my movable interface is making compatibility between mouse pointers and touching devices, because my movable interface is using universal trigger, "mousemove" which used to occur on many touching panels on mobile devices, but not all, to make compatibility with traditional mouse system on PC.
Browser Base Application (Web Apps) has a good key to the future because its compatibility has better than Computer Base Application. If You make one Web App, your Web App works on a browser in every platform. But it's ideal — many developers are trying this, then finding some issues — and browsers are growing their performances. In fact, it's a heavy loader, a big owner of memory in your computer. Because computers are having big memory and good speed these days, it's time to open the door to the future of Web Apps.

== Tutorial ==

1. General

Touch or click Magenta Label on "Sticker Box", then you touch another point or move your mouse. You can see the movable menu, "Sticker Box". Stick it where you want, by touching or clicking Magenta Label again. You can hide "Sticker Box" by touching or clicking Cyan Triangle. You can reshow "Sticker Box" by touch or click your text area. Light Cyan Label is its text, and if you touch or click it, "Sticker Box" will show Function. White Label is a input area where you can write parameters of functions on "Sticker Box". Yellow Label is a button to command Function.

2. Lines Box

Touch or click your text area, then you can know how many lines and numbers the caret in your text is placed on. Type lines and/or numbers on White Label and touch or click "Go" or press Enter so that your caret moves where you want, e.g., typing "20:6" means your caret moves to the 20th line and the 6th word. Typing "3" means your caret moves to the 3rd line and its beginning.

Touch or click "Top" to take your caret to the top of your text area.

Touch or click "Last" to take your caret to the bottom of your text area.

3. Search Box

Change Command by touching or clicking "Select" which toggles "Search", "Replace", "Delete".

On "Search": Type your target word on the "Search?" White Label.

On "Replace": Type your target word on the "Search?" White Label, your demand word on the "Replace?".

On "Delete": Type your target word on the "Search?" White Label, make sure to empty on the "Replace?".

Because your target word is based on Regular Expression, in several cases, you need to write the word with the rule of Regular Expression, e.g., if you want search "*", write it with escape character such as "\*", and if you want search two spaces, write "\s\s". Also see below described for Regular Expression.

Then touch or click "Go" or press Enter.

If "Back" is active, you can undo these commands. "Back" is only up to 40 times because of saving memory loading. Replacing and Deleting reduce the limit of storing memory for "Back". If you click or touch your text area, "Back" is deactivated and cleaned past activities.

This Search Box is searching the word by JavaScript's Regular Expression. Type your search word by the rule of Regular Expression without delimiters, and select "m" (multi-lines modifier for use "^", "$" on each lines), and/or "i" (ignore cases). "g" is never be used because this modifier for all replacing words on one time [String.prototype.replace()], or get all matching words on one time [String.prototype.match()].

4. Style Box

Each current status is indicated on White Label. The top is font color, the middle is font size and font weight, the bottom is background color.

On Top and Bottom: Type color code by Hexadecimal style (e.g. "#89abcd") or just as displayed (e.g. "rgb(123,213,132)") to change font and background color.

On Middle: Type font size and font weight. Connect these by one colon, e.g, "14px:bold" means font size will be 14px and font weight will be bold (typically shows "700" numerically as a result). Typing "14px" means font size will be 14px and font weight will not be changed. Typing ":400" means font size will not be changed and font weight will be 400.

Then touch or click "Change" or press Enter.

5. Position and Style Saving

Positions of Boxes and the style changed by Style Box will be saved. But these have limitation. If you close your browser or current window, saved positions will be erased.

6. Stop Default Click Events when "Sticker Box" Moving is on Active

When any Box has been moving by clicking Magenta Label, and Cyan Triangle has been changed to Square, default click events will be stopped for usability of moving "Sticker Box", particularly on touching devices to stop opening links to other pages. If you want retrieve default click events, click Cyan Square of any "Sticker Box" to change to Triangle.

== Compatibility ==

1. Browsers
Worked on So-called "Modern Browsers". In Edge, word search has not worked. I mean, Modern Browsers' Common is to be open-sourced. Once, IE (now called as Edge) was the giant of browsers on its proprietary style.

2. OSs and Devices
I tested this plugin on Linux PC, Windows 10 PC, and Android Mobile Devices. In these, this plugin works. But the "mousemove" event for moving "Sticker Box" may not be embedded in any devices. You may meet an issue of moving "Sticker Box".

== Installation ==

Jimmy Editor is a plugin under the terms of the GNU GPL. If you have some curious to this plugin, you can download and test it from GitHub public repository. https://github.com/JimmyKenMerchant/jimmy-editor

== Copyright ==

The Jimmy Editor, A WordPress Plugin, Copyright 2017 Kenta Ishii
Jimmy Editor is distributed under the terms of the GNU GPL

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

== Changelog ==

= 0.9.8 Beta =
* Improved initial X Y positions of each Box | Modified Usability on Touching Device
* Last Trial for Release in WordPress.org
* (* Already Resolved by adding to reset window Y scroll in this version *) FireFox, IE and Edge's issue to hide top level of textarea when "Top" in Lines Box seems to scroll to the top of the textarea, not the top of "form" tag (Parent of textarea) in default, unlike Chrome and Opera. If wanting to fix this problem, make the function to jump to the top of "form" tag manually when "Top" and "Go" to low numbered lines.
* Edge(38.14393.0.0)'s issue to stop searching and not to be able to search the next word in Search Box randomly seems tricky because in IE(V.11), searching is well done. Edge is a de facto later version of IE(V.11). Plus, if you double click "Go" button, searching go ahead to the next word. The reason of this issue seems a pointing problem, reseting cursor positions and pointing the end of the text area, after focusing other elements (e.g. put cursor on any point in the text area then start search, it starts from the end of the text area). IE(V.11) clears this problem. To avoid this issue, it is needed to make function to save previous cursor positions manually before focusing other elements. But I decided to stay this issues because of correctness in IE(V.11), a de facto earlier version of Edge.
: April 5, 2017

= 0.9.7 Beta =
* Changed the type of the pointing cursor for each Box | Modified README.txt
: April 4, 2017

= 0.9.6 Beta =
* Added Functions (such as Back to Start) for Search Box
: April 3, 2017

= 0.9.5 Beta =
* Added Modifier for Regular Expression in Search Box | Reviewed Text Domain
: April 1, 2017

= 0.9.4 Beta =
* Added Position and Style Saving
: March 21, 2017

= 0.9.3 Beta =
* Modified Regular Expression Searching in Search Box
: March 21, 2017

= 0.9.2 Beta =
* Trial on Browsers | Added Folding Function
* On FireFox (Android), Chrome (Android), Opera (Android) Worked.
* On Chrome (PC), Opera (PC) Worked.
* On IE (V.11), on Post Editor, scrolling has not been synchronized with line search and word search.
* On Edge, an odd of scrolling similar to FireFox (PC), plus word search has not worked. line search has worked. Even IE (V.11) worked word search!
: March 21, 2017

= 0.9.1 Beta =
* Added Font | Background-color Style Changer
* On FireFox (PC V.52.0.1) Worked; but on Post Editor, scrolling has an odd when clicking "Top", not showing the top level of the textarea.
: March 19, 2017

= 0.9 Beta =
* Beta Release: March 17, 2017
