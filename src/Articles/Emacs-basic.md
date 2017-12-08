Emacs

退出Emacs：
 
 ```text
 C-x C-c
```


退出当前语句：
```text
 C-g
``` 


```text
    C-v	Move forward one screenful
    M-v	Move backward one screenful
    C-l	Clear screen and redisplay all the text,
		 moving the text around the cursor
		 to the center of the screen.
```

光标前后左右
```text
			    
	C-f	Move forward a character
	C-b	Move backward a character

	M-f	Move forward a word
	M-b	Move backward a word

	C-n	Move to next line
	C-p	Move to previous line

	C-a	Move to beginning of line
	C-e	Move to end of line

	M-a	Move back to beginning of sentence
	M-e	Move forward to end of sentence
```

重复

```text
 type C-u 8 * to insert ********.
```


删除
```text
//window上<DEL>指的是退格键[Backspace]
 	<DEL>       Delete the character just before the cursor
 	C-d   	     Delete the next character after the cursor
 
 	M-<DEL>      Kill the word immediately before the cursor
 	M-d	     Kill the next word after the cursor
 
 	C-k	     Kill from the cursor position to end of line
 	M-k	     Kill to the end of the current sentence


You cacn also kill a segment of text with one uniform method.  Move to
one end of that part, and type C-<SPC>.  (<SPC> is the Space bar.)
Next, move the cursor to the other end of the text you intend to kill.
As you do this, Emacs highlights the text between the cursor and the
position where you typed C-<SPC>.  Finally, type C-w.  This kills all
the text between the two positions.
```

窗口操作
```text
	C-x 1	One window (i.e., kill all other windows).
```
帮助
```text
C-h k  i.e. C-h k C-f 查看C-f命令 
```

撤销
```text
C-/
C-_
```



