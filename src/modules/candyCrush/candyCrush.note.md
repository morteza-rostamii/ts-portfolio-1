<!-- 

# what is the game of candy crush? 
==

# a board with different colored candies
# match 3 same colored candy in a row or column
  # clear the candies 
  # get score

# swap adjacent candies in a row or col direction.

# if: 3 colors match
  # clear those candies
  # candies above them fall in their place
  # and more candies comes from top of the screen to fill up top of the board.

=========================================

# breaking down:
==

# a data structure to represent the board and it's cells 
# render the board visually 
# generate random colored candies and place them on the board
# try to generate an event number of candies of each color, so: we can't get mostly red and just one green

# swapping adjacent candies:
  # click event on each candies
  # once a candy is clicked: the second click only can happen on one of it's adjacent cells 
    #
  # # # 
    # 
  # if: second click is on a non adjacent cell 
    # move cursor to that cell 
  # if: click on and adjacent cell 
    # try swap
      # swap success 
      # swap failed
  
# matching candies:
== 
  # after each successful swap 
    # check for 3 match in the row and col in which swapped item has moved into.
    # remove matched candies from the board.

    # for any candy on the board, move into bottom cell if it's empty and keep doing so, until there is no empty cell in your bottom 
    # then generate more candy and fill up the empty cells on top of the board
      *** animate such candies move from top through each col downward into slots


# scoring system:
==
  # keep track of player score 
  # for each removed candy add 1 to score
  # display score into ui

# win condition:
==
  # after each move check score, if: passed 40 stop the game

# animations:
  # swap adjacent animation
  # failed swap animation
  # removing animation 
  # move from up to empty cells animation

# setup a game loop to update the game state and ui and handle player input

# Game over:
  # check the board for valid move left, meaning is there any adjacent candy to swap in row or col direction to get a 3 colored match??!
  # if: no valid move left on the game and score not 40 
    # Game over

  # game reset button
    # reset board with new candy 
    # reset score
    
# 

-->