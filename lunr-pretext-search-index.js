var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec11-SolutionsElementaryOperations",
  "level": "1",
  "url": "sec11-SolutionsElementaryOperations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Solutions and Elementary Operations",
  "body": " Solutions and Elementary Operations   Back in previous algebra classes, you probably learned how to solve system of linear equations algebraically using methods like substitution and elimination. While these methods are effective for small systems, they quickly become unwieldy as there are more variables and\/or more equations.  As our introductory lesson to linear algebra, we will learn a more efficient method for solving systems of linear equations using elementary row operations on augmented matrices .    After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .        Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .      Solving Systems of Linear Equations  The type of systems of linear equations you may encounter a lot before may look like this: You probably learned the two most common ways to solve these equations.  The first method is called substitution . In this method, you will   solve for one variable in terms of the other (using either equation);    substitute the resulting expression in the other equation;    substitute the resulting value into the expression from Step 1 (or into either equation) to get the second value.   Let's use this method to solve this system of linear equations!  If we solve the first equation for , we get Then we can substitute this into the second equation to get Then we can simplify and solve for and get a specific number: Then we can substitute this value of into to find the value of . So the solution to this system of linear equations is .   NOTE: This method can be generalized and used for larger linear systems (more equations and\/or more variables). But the next method is much better for larger systems.  You may have called the next method something like the \"subtraction method\" or the \"elimination method\". In this method you perform \" elementary operations \" on the equations until you get a system that is super easy to solve.  The elementary operations you can choose from are:   swap two equations;    multiply an equation by a constant (on both sides);    add a multiple of one equation to the other equation.     Let's use the elementary operations to solve the same system of linear equations as before:   First, we will add times the first equation to the second equation (replacing the second equation) to get Next, we will multiply both sides of the second equation by to get Then we will add times the second equation to the first equation (replacing the first equation) to get Finally, we will multiply the first equation by to get Notice that we have now turned our system of equations into a new system of equations that is absurdly easy to solve. It literally just says the answer is .  But why does the method of elementary operations work? This method works because none of the three elementary operations changes the solution set of the system of equations . At each step, the set of solutions of the system before you perform the elementary operation is exactly the same as the solution set after you perform the elementary operation.   But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).     Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !      Augmented Matrices and Elementary Operations  Basically, a matrix is just an array of numbers inside of a set of brackets. For example, is a matrix since there are rows and columns.  We will learn a lot more about matrices this term! But first we will learn about a kind of \"fake\" matrix called an augmented matrix . An augmented matrix is compressed version of a matrix equation which we will learn about soon.  For any system of equations we can make the associated augmented matrix by basically writing down the equation inside of a big set of brackets and erasing all of the variables and addition\/subtraction signs and replacing all of the equal signs with a big vertical line (some people used a dashed line).  For example, we can convert the following system of linear equations into its associated augmented matrix as The part of the augmented matrix to the left of the vertical line(s) is called the coefficient matrix (the coefficient part of the system) and the part to the right of the vertical line(s) is called the constant matrix (the constant part of the system).  When you write a system of linear equations as an augmented matrix, you can do the exact same operations to your equations except now you do them to the rows of the matrix (each row is just a compressed version of an equation!). So the three elementary row operations are:   swap two rows;    multiply a row by a non-zero constant;    add a multiple of a row to another row (replacing that row).   You can solve a system of equations by (1) writing it as an augmented matrix, (2) performing elementary row operations until it is in a \"nice\" form, and then (3) writing this nice version as a system of linear equations (and reading off the answer).  Let's solve the previous system of linear equations using the augmented matrix. Our augmented matrix is We can add times Row 1 to Row 2 (replacing Row 2) to get Then we can multiply Row 2 by to get And then add times Row 2 to Row 1 (replacing Row 1) to get Finally, we can multiply Row 1 by to get Now if we convert this back to a system of linear equations, we get And it's already solved!   Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !      How many solutions can a linear system have?  The system of linear equations in the previous example has exactly one solution (which we found in three different ways!) but not all linear systems have exactly one solution. Some do not have any solutions and some have infinitely many solutions.  Let's solve the following system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is Let's first add times Row 1 to Row 2 (replacing Row 2). We get Now we can write this as a system of linear equations, and we get But... is definitely NOT equal to . So this system has no solution!  Notice that both of the equations in our original system are lines (that's where the \"linear\" comes from!). Richard graphed these two lines and they look like this:    The line (in blue) and (in red)   These lines are parallel and they don't intersect!  When you have three variables then each equation is a plane, so you get no solutions when one of the planes is parallel to (but not equal to) the other. And the same kind of thing happens in higher dimensions except that it would blow your mind if you tried to see it!   What happens in your augmented matrix when you have no solution? You zero out a row of coefficients using elementary operations BUT the constant in that row is NOT zero.  Next, let's solve this system of linear equations using the augmented matrix and elementary row operations: The augmented matrix is This time, we will add times Row 1 to Row 2 (replacing Row 2), and we get Now we can write this as a system of linear equations. We get This time, the second equation is true. IS definitely equal to . Notice that our second equation is true no matter what and are! That means that any that satisfies the first equation will satisfy both equations. So the solution is every point on the line .  If you were to graph the two original equations, this time you would find that they were actually the exact same line!  When you have infinitely many solutions, you will want to write the solution set in parametric form . The way to do this (for a two-variable system) is to solve for one variable in terms of the other and then write a general form for any solution . For this example, we can solve for in terms of and get So for any value of , we get the solution . In this case, the is called the parameter .  We can pick any value of  we want and plug it into that formula to get a solution to the system. For example, if Richard picks , then he will get the solution .   Notation Warning!  Your textbook likes to introduce a new letter to use for the parameter and the homework system will do this as well. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to match what you will see from the textbook and the homework system.   Sometimes we may need more than one parameter to describe all of the solutions to a system of equations. But that is a story for another day (that day will be Thursday).   What happens in your augmented matrix when you have infinitely many solutions? You zero out a row of coefficients using elementary operations AND the constant in that row is also zero.    Existence and Uniqueness Questions  Recall that a system of linear equations can have either no solution, exactly one solution, or infinitely many solutions. We ask two questions to determine which of these three cases we are in:   Is the system consistent ? That is, does a solution exist ?    If a solution exists, is it the only one? That is, is the solution unique ?     Right now, we can answer these questions by actually solving the system of equations and seeing what happens. In , we will learn how to answer these questions by using only the augmented matrix and elementary row operations without having to write the system of equations out.   "
},
{
  "id": "sec11-SolutionsElementaryOperations-2-2",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#sec11-SolutionsElementaryOperations-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations augmented matrices "
},
{
  "id": "sec11-SolutionsElementaryOperations-2-3",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#sec11-SolutionsElementaryOperations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     construct an augmented matrix from a system of linear equations (and vice versa);    use elementary row operations on an augmented matrix to solve a system of linear equations;    distinguish between systems with exactly one solution , infinitely many solutions , and no solution .    express the solution set of a system of linear equations with infinitely many solutions in parametric form .    "
},
{
  "id": "sec11-SolutionsElementaryOperations-3",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#sec11-SolutionsElementaryOperations-3",
  "type": "Investigation",
  "number": "1.1.1",
  "title": "",
  "body": "  Recall we learned solving a (system of) linear equation(s) before. Let's try solving some of them.    The equation is a linear equation. What is the solution(s) to this equation?   It is a system of linear equations. It's just a boring one because there is only one variable and only one equation.  It has one solution,      The equation is also a linear equation. What is the solution(s) to this equation?   This system has only one equation but it has two variables. It has infinitely many solutions!  Every point on the line is a solution. Some specific solutions are and .     The two linear equations and form a system of linear equations. What is the solution(s) to this system of equations?   This system has two equations but only one variable.  It doesn't have any solutions! It isn't possible for to be both and .    "
},
{
  "id": "subsec-SolvingSystemsEquations-3",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-SolvingSystemsEquations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution "
},
{
  "id": "subsec-SolvingSystemsEquations-11",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-SolvingSystemsEquations-11",
  "type": "Note",
  "number": "1.1.1",
  "title": "But Richard... Why don’t the elementary operations change the solution set of a system of equations?",
  "body": " But Richard... Why don't the elementary operations change the solution set of a system of equations?  Instead of giving a formal proof for all cases (which you can find in the book if you want), Richard will explain why it works in the case of a system of two equations with two variables:   It is obvious that swapping equations clearly can't change the solution set. It makes no difference what order the equations are listed in.    It is also pretty clear that multiplying both sides of an equation by a non-zero number will not change the solution set.  First, notice that if is a solution before , then it is a solution after . That is, if , then it is also true that for any non-zero constant . This is because when two numbers are equal, you get the same answer when you multiply each of them by the same number.  Second, notice that if is a solution after , then it is a solution before . Since the number is not zero, exists and is not zero. So if , then it is also true that (you can just multiply both sides by !).    The least obvious one is the elementary operation of adding a multiple of one equation to another equation (and replacing the equation). We can think of this elementary operation as doing two steps:   multiply one equation by a non-zero constant, and    add one equation to another equation (and replace that equation with the sum).   The first step is just the operation of multiplying an equation by a non-zero constant, which we already know does not change the solution set. So we just need to demonstrate that adding one equation to another (and replacing the second equation with the sum) does not change the solution set.  First, we need to show that anything that was a solution before is still a solution after . Consider the system of linear equations Suppose that and (in other words suppose is a solution). We want to show that is still a solution to the system Since we already know that is a solution to the first equation, we just need to show it is a solution to the second equation.  Since the number is equal to the number . If we add to both of them, we get the same thing. So we get And since we know that , we can substitute to get Do some simplifying and factoring on the left side and we get This proves is indeed a solution to the second equation!  Second, we want to show that if is a solution after then it is a solution before . But really we already have! That is because we can get from the after system to the before system by multiplying the first equation by and adding it to the second equation. So going backwards just involves doing the exact same thing as going forward (just after multiplying by a non-zero constant which we know always works!).      But Richard... Why bother showing the solution sets are the same before and after, and vice versa?  That is because this establishes that the elementary operations are reversible ! Then we can call the two systems \" equivalent \" in the sense that they have the same solution set.  To give you an example of non-reversible operations, consider the operation of \"squaring both sides of an equation\".  Let's say we have an equation . Obviously, there is only one solution to this equation, which is . If we apply this operation, then we get the equation . Clearly, is still a solution to this new equation. Hence, in this operation, the solution before is still a solution after .  Yet, the new equation has another solution, which is . This isn't a solution to the original equation, and hence, the solution after may not be a solution before .  This shows that this operation is not reversible and hence the two equations are not equivalent (in the sense that they don't have the same solution set).   "
},
{
  "id": "subsec-SolvingSystemsEquations-12",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-SolvingSystemsEquations-12",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Use the elementary operations to solve the following system of linear equations:    There are a lot of ways to do this. This is one:  Step 1: Multiply the second equation by to get   Step 2: Add times the first equation to the second equation (replacing the second equation) to get   Step 3: Multiply the second equation by to get   Step 4: Add times the second equation to the first equation (replacing the first equation) to get   Step 5: Multiply the first equation by to get   And that's our solution, !   "
},
{
  "id": "subsec-AugmentedMatrices-3",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-AugmentedMatrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "subsec-AugmentedMatrices-5",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-AugmentedMatrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix constant matrix "
},
{
  "id": "subsec-AugmentedMatrices-8",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-AugmentedMatrices-8",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " Solve the following system of linear equations (again). This time make the augmented matrix and use elementary row operations to solve it.   The augmented matrix for this system is There are a lot of ways to solve the system. Here is one:  Step 1: Multiply Row 2 by to get   Step 2: Add times Row 1 to Row 2 (replacing Row 2) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 1 (replacing Row 1) to get   Step 5: Multiply Row 1 by to get   Then we can write this as a system of equations again and get And that's our solution, !   "
},
{
  "id": "subsec-NumberOfSolution-5",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-NumberOfSolution-5",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "  The line (in blue) and (in red)  "
},
{
  "id": "subsec-NumberOfSolution-11",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-NumberOfSolution-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solve for one variable in terms of the other and then write a general form for any solution parameter "
},
{
  "id": "subsec-NumberOfSolution-13",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-NumberOfSolution-13",
  "type": "Note",
  "number": "1.1.6",
  "title": "Notation Warning!",
  "body": " Notation Warning!  Your textbook likes to introduce a new letter to use for the parameter and the homework system will do this as well. For example, in this case they would probably use and write the solutions as This is unnecessary but Richard will do it from time to time just to match what you will see from the textbook and the homework system.  "
},
{
  "id": "subsec-ExistenceUniqueness-SystemEquations-2",
  "level": "2",
  "url": "sec11-SolutionsElementaryOperations.html#subsec-ExistenceUniqueness-SystemEquations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent unique "
},
{
  "id": "sec12-GaussianElimination",
  "level": "1",
  "url": "sec12-GaussianElimination.html",
  "type": "Section",
  "number": "1.2",
  "title": "Gaussian Elimination",
  "body": " Gaussian Elimination   While we have already explored the use of elementary operations to solve linear systems, we now turn our attention to a formal, algorithmic approach known as Gaussian Elimination . This method provides a systematic way to navigate the \"staircase\" of a matrix, ensuring that we can solve systems of any size—whether by hand or by programming a computer to do the heavy lifting for us.  In this section, we will define the \"goal\" states for our matrices: row echelon form and reduced row echelon form . We will also learn how to use these forms to quickly identify whether a system has a unique solution, infinitely many solutions, or no solution at all by identifying pivots and free variables .    After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form;    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.      The method we have been talking about in for solving a system of linear equations using an augmented matrix and elementary row operations is called Gaussian Elimination . We now will learn some more terminology related to Gaussian Elimination and boil it down to an algorithm.  There are LOTS of different ways that you can go about solving a system using an augmented matrix and elementary row operations. You can do lots of different steps in lots of different orders and you can convert back to a system of linear equations at lots of different points in the process.  However, it will be helpful to learn a more algorithmic approach both for consistency with hand calculations and because a consistent algorithm is one that you can program a computer to execute.  In this section, we will learn two variants of the Gaussian Elimination algorithm. Both of them include what I will call Part 1 while the second includes a Part 2.  Let's solve the following system of linear equations we worked on in using the Gaussian Elimination algorithm. Then Richard will describe the algorithm in general.  The augmented matrix is The first thing we will do is to multiply Row 1 by to get The goal of that step was to have the first non-zero thing in Row 1 be a .  Next, we will add times Row 1 to Row 2 (and replace Row 2) to get The goal of that step was to make everything below that first a zero.  Then we will multiply Row 2 by to get Notice that now the coefficient matrix looks like a litter stair step with the first thing in each row a with only below it. This matrix is in what is called row echelon form .  When you reach that point, you have completed Part 1 of the Gaussian Elimination algorithm.  Now let's keep going with Part 2!  We will now add times Row 2 to Row 1 (and replace Row 1) to get The goal of that step was to turn \"everything\" above the first in Row 2 into a zero. Now the matrix is in what is called a reduced row echelon form . The difference being that now we have zeros above our staircase of 's.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.     Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.    Note: These definitions apply to regular matrices and to augmented matrices.  For example, the following matrices are all in row echelon form:   The following matrices (and the last one above) are all in reduced row echelon form:    Note on the homework system (and the second example above)  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix by the homework\/quiz, it will annoyingly expect those last steps.   When applying the Gaussian Elimination algorithm, the goal is to get the augmented matrix into row echelon form (Part 1) and\/or reduced row echelon form (Part 2). Here are the steps:   Step 0: If the matrix has only zeros in it, you are done!    Step 1: If any rows start out with one or more zeros, move them toward the bottom. The more zeros a row has before the first non-zero entry, the lower it goes on the list.    Step 2: Multiply Row 1 by the reciprocal of its first non-zero entry. This will give you your first leading .    Step 3: For each non-zero entry that appears directly below the leading , multiply Row 1 by the opposite (negative) of that number and add Row 1 to its row. This will give you all zeros below the leading .   Now the process is iterated! Apply the above procedure to the part of the matrix that excludes the first row and column. Repeat until either (1) the part you have left is all zeros, or (2) you get to the bottom of the matrix. In either case, the matrix will now be in row echelon form.   If you want to get a reduced row echelon form you will need to do Step 4:    Step 4: For each row that contains a leading , eliminate each non-zero entry above it by multiplying that row by the opposite of the non-zero entry and adding that to the row containing the non-zero entry.     Let's apply the method to try to solve this (larger) system of linear equations: The augmented matrix is Step 1 is already done since none of the rows starts out with a zero. So, let's do Step 2 and multiply the first equation by to get our first leading : Now let's do Step 3 and turn everything below our leading (in Row 1) into a zero! We will add times Row 1 to Row 2, add times Row 1 to Row 3, and add times Row 1 to Row 4. We get Now we imagine crossing out Row 1 and Column 1 and apply the method to what is left. Since the row with the most zeros in the beginning (Row 4) is already on the bottom and Row 2 and Row 3 have the same number of leading zeros, we still don't have to do anything for Step 1. Moving on to Step 2, we will multiply Row 2 by to get a leading in Row 2: Now we need to zero out all of the entries below this new leading . All we have to do is add times Row 2 to Row 3 to get And now our matrix is in row echelon form because everything below Row 2 is a zero!  To get our matrix into reduced row echelon form, we need to zero out everything above my leading s (Step 4). But there is nothing above the first leading obviously, so we just have to worry about the leading in Row 2. We will add times Row 2 to Row 1 to get Now the matrix is in reduced row echelon form!  If we convert the reduced row echelon form of the augmented matrix back to a system of linear equations, we get So we know that and we can see that . So the solution is or where is our parameter and can be anything.  But if we stopped early and converted to a system of linear equations after getting the matrix into row echelon form, we get Again, we know that and we can solve for in terms of and : But isn't a parameter! It's just , so we have to \"back substitute\", plugging this value into the equation for to get    But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.     Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .     How many parameters does the solution have?  We use parameters to write the solution only when there are infinitely many solutions. And we can tell how many parameters we have by counting how many leading s we have when we put our matrix in row echelon form!    All we have to do is to subtract the number of leading s from the total number of variables.   Each leading is associated with a variable that we can solve for in terms of the other variables. The author of your textbook calls these the \"leading variable\". The other variables are called \"free variables\" and these are the ones that can be used as parameters (or if you do it like the author, these are the variables you can set equal to new letters that you use for the parameters).  In the exapmle we just did, and are leading variables, and is the only free variable. So we only need one parameter to write the solution. The solution in parametric form is or if you want to use a new letter like the author would do.   Note: It doesn't matter whether you are in reduced row echelon form or just row echelon form, you will have the same number of leading s (and so the same number of leading variables and free variables).  Pretend that we had a system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and we got This time we have 3 leading s, so we have 3 leading variables. These are , , and . We also have free variables, and they are and .  Since the matrix isn't in reduced row echelon form, we will have to do some back substitution to get the solution. Converting it to a system of linear equations, we get Now we will be able to see why it is called \"back substitution\", because we go backwards!  First, we will ignore the . It is true (which is important!) but it doesn't actually help us figure out the solution.  We see that , then we substitute that \"back\" into our second equation to get Then we substitute and back into our first equation to get So we will treat the and as free variables (parameters) and write the solution. The solution set is all points of the form where and can be any real numbers.  Because of the importance of the leading s, there are special terms for it.   Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.     Note: Rank is a term reserved for regular matrices, not augmented matrices. If someone asks for the rank of an augmented matrix, they mean the coefficient part of the matrix (the part to the left of the vertical line(s)). Also, we will learn a better (but equivalent) definition of rank later in the term.    Existence and Uniqueness Questions  Imagine we have an inconsistent system of linear equations. Then its augmented matrix, in row echelon form, will have a row of the form which corresponds to the equation . The is a pivot position (since this is the first non-zero entry in its row and we can easily turn it into a leading ). This implies that a system is inconsistent if there is a pivot position in the rightmost column (the one to the right of the vertical lines(s) which represents the constant matrix). Furthermore, if there is a pivot position in the rightmost column, then the rightmost column is a pivot column. Let's make it a theorem!   Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.    Next week, we will develop a (more sophisticated) version of the above theorem (using the rank of the matrices) when we learn more about matrices (and matrix equations). For now, we will just use the term \"pivot column\" instead of \"rank\" for our augmented matrices.   Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.        Suppose a linear system having 6 equations and 3 variables is consistent. Can you guarantee that the solution is unique? Can you guarantee that there are infinitely solutions?   Think about the augmented matrix of such a system. How many rows and columns does it have?  Imagine you convert the augmented matrix to (reduced) row echelon form. How many pivot columns can you have? In other words, how many leading s can you have?     "
},
{
  "id": "sec12-GaussianElimination-2-1",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian Elimination "
},
{
  "id": "sec12-GaussianElimination-2-2",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row echelon form reduced row echelon form pivots free variables "
},
{
  "id": "sec12-GaussianElimination-2-3",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form;    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.    "
},
{
  "id": "def-ReducedRowEchelonForm",
  "level": "2",
  "url": "sec12-GaussianElimination.html#def-ReducedRowEchelonForm",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.   "
},
{
  "id": "sec12-GaussianElimination-15",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-15",
  "type": "Note",
  "number": "1.2.2",
  "title": "Some variations on the above definition.",
  "body": " Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.  "
},
{
  "id": "sec12-GaussianElimination-19",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-19",
  "type": "Note",
  "number": "1.2.3",
  "title": "Note on the homework system (and the second example above).",
  "body": " Note on the homework system (and the second example above)  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix by the homework\/quiz, it will annoyingly expect those last steps.  "
},
{
  "id": "sec12-GaussianElimination-26",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-26",
  "type": "Note",
  "number": "1.2.4",
  "title": "But Richard... Should I use row echelon form or reduced row echelon form?",
  "body": " But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.   "
},
{
  "id": "sec12-GaussianElimination-27",
  "level": "2",
  "url": "sec12-GaussianElimination.html#sec12-GaussianElimination-27",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .   "
},
{
  "id": "def-Pivot",
  "level": "2",
  "url": "sec12-GaussianElimination.html#def-Pivot",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Pivots, Pivot Columns, and Rank.",
  "body": " Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.   "
},
{
  "id": "thm-ExistenceUniquenessTheorem",
  "level": "2",
  "url": "sec12-GaussianElimination.html#thm-ExistenceUniquenessTheorem",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Existence and Uniqueness Theorem.",
  "body": " Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.   "
},
{
  "id": "subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "level": "2",
  "url": "sec12-GaussianElimination.html#subsec-ExistenceUniqueness-AugmentedMatrices-5",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.      "
},
{
  "id": "subsec-ExistenceUniqueness-AugmentedMatrices-6",
  "level": "2",
  "url": "sec12-GaussianElimination.html#subsec-ExistenceUniqueness-AugmentedMatrices-6",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " Suppose a linear system having 6 equations and 3 variables is consistent. Can you guarantee that the solution is unique? Can you guarantee that there are infinitely solutions?   Think about the augmented matrix of such a system. How many rows and columns does it have?  Imagine you convert the augmented matrix to (reduced) row echelon form. How many pivot columns can you have? In other words, how many leading s can you have?   "
},
{
  "id": "sec13-HomogeneousEquations",
  "level": "1",
  "url": "sec13-HomogeneousEquations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homogeneous Equations",
  "body": " Homogeneous Equations   In this section, we explore a special type of systems of linear equations, called the homogeneous systems of linear equations .    After this section, students will be able to:     solve homogeneous systems of linear equations using Gaussian elimination algorithm.    write the general solution of a homogeneous system as a linear combination of basic vectors (written as column vectors).       Richard claims that the following system of linear equations has at least one solution (hence a consistent system) at the first glance. Why does Richard know about it quickly?   Recall something is called a solution if it satisfies all the equations in the system. Can you guess-and-check a solution to this system quickly?    If you plug in zero for every variable, you will get zero on the left-hand side of every equation and solve all of them! So is a solution to this system of linear equations.  When you have all zeros for the constant terms, you always have this solution (all variables equal to zero), which is called the \" trivial solution \".    In this section, we will learn about a super important special kind of system of equations called homogeneous systems .  A homogeneous system of equations (or a system of homogeneous equations) is just a special case where all of the constants to the right of the equal sign are zero.  For example, we worked with the following system of linear equations in the last section: This is NOT a homogeneous system since the constants on the right-hand side are not all zero. We can make it homogeneous by changing the number on the right-hand side of every equation to a zero as follows: Then we have a homogeneous system!   Note: Just to be clear, this is a different system of linear equations. However, we will see later that it is actually related to the original one in an important way!  Usually, a system of linear equations can have either (1) zero, (2) one, or (3) infinitely many solutions. But it is impossible for a homogeneous system to have zero solutions! As we figured out the investigation question, every homogeneous system has at least the trivial solution (where all the variables are zero). So a homogeneous system either has one solution (trivial) OR it has infinitely many solutions .  Let's solve our homogeneous system in the investigation! First, we will write the augmented matrix for the system: We can actually do the exact same steps that we did with the non-homogeneous version. The only difference is that the constant column doesn't require any work since all the entries hold steady at zero.  So if we put it into row echelon form, we get: Now we can convert back to a system of linear equations and we get: Just like with the regular version, and are the leading variables and is a free variable. We can back substitute into the first equation to get and write the solution in parametric form: or by writing what an arbitrary point in the solution set looks like:    Basis Vectors and Linear Combinations  Now, notice that we can factor out a in the solution and see that the set of solutions is of the form where can be any real number. That means every solution of the system is a multiple of .  We call this a \" basis \" or \" basic vector\" of the solution set (Actually \"basis\" is much more common, but the author uses \"basic\" in the textbook...).   Pretend that we had a (homogeneous) system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and got: The leading variables are , , and , so our free variables are and . That is, we should be able to solve for the other three variables in terms of and .  Let's convert it to a system of linear equations: We know that and we can back substitute into the second equation to get as well.  Back substituting into the first equation, we get Now we can write an arbitrary point in the solution set as Now we can split this up into two vectors, one with only 's and one with only 's: This means that every solution is a linear combination of the \"basic\" solutions and .   Points in -dimensional space are represented as ordered -tuples. For example, the point is a point in -space (we represent -space by ). In linear algebra, such points can also be represented as matrices (row vectors) or matrices (column vectors). So can be represented as the row vector or the column vector In this class, we will mostly use column vectors for reasons that will become clear in Section 2.2.   Recall that we did our earlier example we got the solution which we broke up into the sum of two points like this: Then we factor out the and to get   Now, we can rewrite all of this using column vectors! An arbitrary solution (in parametric form) would look like Notice that any vector of this form is a solution to the homogeneous system of linear equations. The and can be any number!  In particular, this means that both and are solutions! That is one reason why they are called the basic solutions (it explains the \"solution\" part). We will learn more about wht they are called \"basic\" in the future!   To make sure we are all on the same page, recall we define two operations on vectors: vector addition and scalar multiplication . They are both defined component-wise . That is,   to add two vectors, we just add together the corresponding entries, and    to multiply a vector by a scalar, we just multiply every entry by that scalar.     Now let's talk about linear combinations! A linear combination of a set of vectors is a sum of scalar multiples of those vectors.      is a linear combination of and since      is also a linear combination of and since      The expression represents the set of all possible linear combinations of and .   Solve the following homogeneous system of linear equations and write an arbitrary solution as a linear combination of basic solutions (written as column vectors):    Let's start by writing the augmented matrix for the system: We will solve the system using the Gaussian elimination algorithm.  Step 1: Swap Row 1 and Row 2 so that we get a leading without using any fractions:   Step 2: Add times Row 1 to Row 2 (and replace Row 2), add times Row 1 to Row 3 (and replace Row 3), and add times Row 1 to Row 4 (and replace Row 4) to get:   Step 3: Multiply Row 2, Row 3, and Row 4 by (observe the last three rows are exactly the same!) to get:   Step 4: Add times Row 2 to Row 3 (and replace Row 3) and add times Row 2 to Row 4 (and replace Row 4) to get:   We can see from the leading s that and are the leading variables and and are the free variables. We can also see this from converting back to a system of linear equations: We can solve for in terms of , , and to get: We can also solve for in terms of and to get: Then we can back substitute this expression for into the first equation to get: Now let's write our general solution as a column vector! Every solution looks like    If you want to turn the augmented matrix into reduced row echelon form...  To get the augmented matrix into reduced row echelon form, we will just need to do one more step after Step 4.  Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get:   Converting it back to the system of linear equations, we get: Similarly, we see that and are the free variables, and hence we will represent and in terms of and :   Then we can write our general solution as a column vector! Every solution looks like      We are actually exposed to some big concepts in linear algebra, like linear combinations and basic vectors. We will loop back to these concepts formally later when we get to the theory of vector spaces. For now, it is totally fine if you have only a vague understanding of these concepts. Remember the overall goal of this section is to learn how to solve homogeneous systems of linear equations!   "
},
{
  "id": "sec13-HomogeneousEquations-2-2",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#sec13-HomogeneousEquations-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     solve homogeneous systems of linear equations using Gaussian elimination algorithm.    write the general solution of a homogeneous system as a linear combination of basic vectors (written as column vectors).    "
},
{
  "id": "sec13-HomogeneousEquations-3",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#sec13-HomogeneousEquations-3",
  "type": "Investigation",
  "number": "1.3.1",
  "title": "",
  "body": " Richard claims that the following system of linear equations has at least one solution (hence a consistent system) at the first glance. Why does Richard know about it quickly?   Recall something is called a solution if it satisfies all the equations in the system. Can you guess-and-check a solution to this system quickly?    If you plug in zero for every variable, you will get zero on the left-hand side of every equation and solve all of them! So is a solution to this system of linear equations.  When you have all zeros for the constant terms, you always have this solution (all variables equal to zero), which is called the \" trivial solution \".   "
},
{
  "id": "sec13-HomogeneousEquations-4",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#sec13-HomogeneousEquations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous systems "
},
{
  "id": "sec13-HomogeneousEquations-5",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#sec13-HomogeneousEquations-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous system of equations "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-3",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis basic "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-4",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-4",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": " Pretend that we had a (homogeneous) system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and got: The leading variables are , , and , so our free variables are and . That is, we should be able to solve for the other three variables in terms of and .  Let's convert it to a system of linear equations: We know that and we can back substitute into the second equation to get as well.  Back substituting into the first equation, we get Now we can write an arbitrary point in the solution set as Now we can split this up into two vectors, one with only 's and one with only 's: This means that every solution is a linear combination of the \"basic\" solutions and .  "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-6",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-6",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Recall that we did our earlier example we got the solution which we broke up into the sum of two points like this: Then we factor out the and to get   Now, we can rewrite all of this using column vectors! An arbitrary solution (in parametric form) would look like Notice that any vector of this form is a solution to the homogeneous system of linear equations. The and can be any number!  In particular, this means that both and are solutions! That is one reason why they are called the basic solutions (it explains the \"solution\" part). We will learn more about wht they are called \"basic\" in the future!  "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-8",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-9",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-9",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "    is a linear combination of and since      is also a linear combination of and since     "
},
{
  "id": "subsec-HomogeneousSystem-BasisVectors-11",
  "level": "2",
  "url": "sec13-HomogeneousEquations.html#subsec-HomogeneousSystem-BasisVectors-11",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Solve the following homogeneous system of linear equations and write an arbitrary solution as a linear combination of basic solutions (written as column vectors):    Let's start by writing the augmented matrix for the system: We will solve the system using the Gaussian elimination algorithm.  Step 1: Swap Row 1 and Row 2 so that we get a leading without using any fractions:   Step 2: Add times Row 1 to Row 2 (and replace Row 2), add times Row 1 to Row 3 (and replace Row 3), and add times Row 1 to Row 4 (and replace Row 4) to get:   Step 3: Multiply Row 2, Row 3, and Row 4 by (observe the last three rows are exactly the same!) to get:   Step 4: Add times Row 2 to Row 3 (and replace Row 3) and add times Row 2 to Row 4 (and replace Row 4) to get:   We can see from the leading s that and are the leading variables and and are the free variables. We can also see this from converting back to a system of linear equations: We can solve for in terms of , , and to get: We can also solve for in terms of and to get: Then we can back substitute this expression for into the first equation to get: Now let's write our general solution as a column vector! Every solution looks like    If you want to turn the augmented matrix into reduced row echelon form...  To get the augmented matrix into reduced row echelon form, we will just need to do one more step after Step 4.  Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get:   Converting it back to the system of linear equations, we get: Similarly, we see that and are the free variables, and hence we will represent and in terms of and :   Then we can write our general solution as a column vector! Every solution looks like     "
},
{
  "id": "sec21-BasicMatrixOperations",
  "level": "1",
  "url": "sec21-BasicMatrixOperations.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix Addition, Scalar Multiplication, and Transposition",
  "body": " Matrix Addition, Scalar Multiplication, and Transposition   Now we start doing Matrix Algebra! You may recall that on the first day I identified Matrix Algebra as one of the THREE different (but VERY interrelated!) ways we study linear algebra. First we learn about scalar multiplication, matrix addition, and the transpose of a matrix.  Most importantly we learn a bunch of rules about how scalar multiplication, matrix addition, and transposes work. These rules should feel very familiar! They are basically the same rules you learned in arithmetic (only applied to matrices).    After this section, students will be able to:     determine the size of a matrix and identify specific entries using subscript notation;    perform the operations of matrix addition, scalar multiplication, and transposition;        We have dealt with many matrices in the last chapter. We also learned a bit about what a vector was.   What is the difference between a vector and a matrix?   Try writing a definition of a vector and a definition of a matrix. Can you see any similarities or differences between the two definitions?    For this class, every vector is a matrix. But the only matrices that we will call vectors are the ones that have either only one row or only one column.   Disclaimer: This answer works for this class. But in more advanced version of linear algebra, this question is actually more complicated (and doesn't exactly make sense).     What exactly is a matrix?  We have dealt with matrices in the last section. Let's formally define what a matrix is since this chapter is all about matrices!  A matrix is a rectangular array of entries (typically numbers). The size of a matrix is determined by the number of rows and columns it has, and it is usually given in the form of , where is the number of rows and is the number of columns.  For example, the following matrix has 2 rows and 3 columns, so its size is .   What are the sizes of each of the following matrices?        Basic Matrix Operations  We will learn three operations on matrices: matrix addition, scalar multiplication, and transposition. Let's introduce all of these operations using examples!  Suppose we have the matrices and .  To add two matrices together, we add all corresponding entries (those would be the things inside the brackets) and the sum is the corresponding entry in the answer.   To multiply a scalar by a matrix , we multiply the scalar by every entry of the matrix and that product is the corresponding entry in the answer.   The transpose of a matrix , denoted , is obtained by flipping it across the main diagonal. That is, every row of the original matrix becomes the corresponding column of the transpose and every column of the original matrix becomes the corresponding row of the transpose.   And we can combine all of these operations in lots of ways!   Let's say we want to compute . Then we have     Let and . Compute the following (if impossible, explain why):                              1.   2. Observe that we can just subtract the corresponding entries of from the corresponding entries of to get the answer. Once we have addition and scalar multiplication, we can define subtraction as adding the negatives.  3. Observe that is a matrix but is a matrix. We cannot add these two matrices together because not every entry of has a corresponding entry in and vice versa.  4.   5.     We can make some observations about these operations:   We can ONLY add two matrices when they are the exact same size . This makes sense because we do it by adding corresponding entries, so if they are different sizes, we won't have those for all of the entries!    If is an matrix, then is an matrix. This makes sense because every row of becomes a column of which also forces every column of to become a row of .     is called a square matrix if it has the same number of rows as columns. Notice that the only way can be the same size as is if is a square matrix.    When we transpose a matrix twice, we get back to the original matrix (you can \"see\" this if you imagine flipping it over the main diagonal twice).  Terminology: the main diagonal of a matrix is the one going down from left to right.       Subscript Notation for Matrices  We can identify the location of any entry of a matrix by saying which row and column it lives in. For example, in our matrix The entry in the second row and third column is . We can say this in symbol as: The entry is .  We can also use subscript notation to denote the entries of a matrix. We indicate the row first and then the column using subscripts. For example, the in matrix can be denoted as .  A generic matrix would be denoted by   And any matrix can be denoted in shorthand by . If your matrix is named you would use to denote the entry in the th row and the th column.   Note: We always identify the row first and then the column when describing an entry of a matrix.  Now we can describe the operations we learned using the subscript notation!  Suppose and , and let be a scalar (you can just think of a scalar as a number since in this this class they always will be). Then since we add two matrices by adding corresponding entries.  Similarly, since we multiply a scalar by a matrix by multiplying it by every entry of a matrix, and since we transpose a matrix by turning every row into a column (and every column into a row).    Rules for Matrix Addition and Scalar Multiplication  Let , , and be matrices ( and fixed), and let and be real numbers (scalars). Then the following properties hold:   Matrix Addition is commutative . That is,     Matrix Addition is associative . That is,     There exists a zero matrix  such that where is the matrix in which every entry is .    For every matrix , there exists a matrix such that where is called the additive inverse of and is obtained by multiplying every entry of by .    Scalar Multiplication distributes over Matrix Addition. That is,     Scalar Multiplication distributes over Scalar Addition. That is,     Scalar Multiplication by a Product of Two Scalars is the Same as Scalar Multiplication by One Scalar Followed by Scalar Multiplication by the Other Scalar. That is,     Scalar Multiplication by leaves a matrix unchanged. That is,      The author of the textbook proves some of these and leaves others as an exercise for the reader. Let's prove them all but only in the case for matrices. These proofs can easily be generalized using and variables for subscripts to make the matrices completely general .   Proof of these Rules for Matrices  Let , , and be arbitrary matrices. And ket and be arbitrary real numbers (scalars).  1. (Communitivity):   2. (Associativity):   3. (Zero Matrix):   4. (Additive Inverse): Then apply commutativity to get (Or just do a similar proof. Either way works!)  5. (Distributive Part 1):   6. (Distributive Part 2):   7. (Multiplication by Product of Scalars):   8. (Scalar Multiplication by 1):   Now try convincing yourself that these properties hold for matrices of any size by generalizing the above proofs!     Rules for Transposes  Let and be matrices. (Note that this notation doesn't mean the matrices aren't square. It just means we aren't assuming that they are). Then the following properties hold:    will be an matrix.  If you turn every row into a column then the number of columns of the new matrix is the same as the number of rows in the original (similar with columns and rows). You can also see this by imagining flipping the matrix across its main diagonal.       If you turn every row into a column and then do that again, you put the matrix right back where you started. It is even more clear if you imagine reflecting the matrix across its main diagonal twice.       It doesn't matter whether you (1) multiply every entry by and then flip across the main diagonal OR (2) flip across the main diagonal and then multiply every entry by . In either case you turn into .       It doesn't matter whether you (1) add all the corresponding entries and then flip across the main diagonal OR (2) flip each matrix across the main diagonal and then add all the corresponding entries. In either case the entry is .     Last but not least, we call a matrix symmetric if it equals its own transpose. That is, is symmetric if . They are called symmetric because if you flip the matrix over the main diagonal it doesn't change it!  One immediate consequence of this property is that if is symmetric, then must be a square matrix (or else, the two matrices won't even be the same size, let alone equal).  For example, the matrix is symmetric because    "
},
{
  "id": "sec21-BasicMatrixOperations-2-3",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#sec21-BasicMatrixOperations-2-3",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     determine the size of a matrix and identify specific entries using subscript notation;    perform the operations of matrix addition, scalar multiplication, and transposition;    "
},
{
  "id": "sec21-BasicMatrixOperations-3",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#sec21-BasicMatrixOperations-3",
  "type": "Investigation",
  "number": "2.1.1",
  "title": "",
  "body": "  We have dealt with many matrices in the last chapter. We also learned a bit about what a vector was.   What is the difference between a vector and a matrix?   Try writing a definition of a vector and a definition of a matrix. Can you see any similarities or differences between the two definitions?    For this class, every vector is a matrix. But the only matrices that we will call vectors are the ones that have either only one row or only one column.   Disclaimer: This answer works for this class. But in more advanced version of linear algebra, this question is actually more complicated (and doesn't exactly make sense).   "
},
{
  "id": "subsec-MatrixIntro-3",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-MatrixIntro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix size "
},
{
  "id": "subsec-MatrixIntro-5",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-MatrixIntro-5",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " What are the sizes of each of the following matrices?     "
},
{
  "id": "subsec-BasicMatrixOperations-8",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-BasicMatrixOperations-8",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Let's say we want to compute . Then we have   "
},
{
  "id": "subsec-BasicMatrixOperations-9",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-BasicMatrixOperations-9",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": " Let and . Compute the following (if impossible, explain why):                              1.   2. Observe that we can just subtract the corresponding entries of from the corresponding entries of to get the answer. Once we have addition and scalar multiplication, we can define subtraction as adding the negatives.  3. Observe that is a matrix but is a matrix. We cannot add these two matrices together because not every entry of has a corresponding entry in and vice versa.  4.   5.    "
},
{
  "id": "subsec-BasicMatrixOperations-10",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-BasicMatrixOperations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square matrix main diagonal "
},
{
  "id": "subsec-Rules-MatrixAdditionScalarMultiplication-2",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-Rules-MatrixAdditionScalarMultiplication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative associative zero matrix additive inverse "
},
{
  "id": "subsec-Rules-MatrixAdditionScalarMultiplication-4",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-Rules-MatrixAdditionScalarMultiplication-4",
  "type": "Proof",
  "number": "1",
  "title": "Proof of these Rules for <span class=\"process-math\">\\(2 \\times 3\\)<\/span> Matrices.",
  "body": " Proof of these Rules for Matrices  Let , , and be arbitrary matrices. And ket and be arbitrary real numbers (scalars).  1. (Communitivity):   2. (Associativity):   3. (Zero Matrix):   4. (Additive Inverse): Then apply commutativity to get (Or just do a similar proof. Either way works!)  5. (Distributive Part 1):   6. (Distributive Part 2):   7. (Multiplication by Product of Scalars):   8. (Scalar Multiplication by 1):   Now try convincing yourself that these properties hold for matrices of any size by generalizing the above proofs!  "
},
{
  "id": "subsec-Rules-TransposeMatrices-3",
  "level": "2",
  "url": "sec21-BasicMatrixOperations.html#subsec-Rules-TransposeMatrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
