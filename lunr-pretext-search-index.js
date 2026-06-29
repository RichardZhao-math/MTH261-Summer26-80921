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
  "body": " Gaussian Elimination   While we have already explored the use of elementary operations to solve linear systems, we now turn our attention to a formal, algorithmic approach known as Gaussian Elimination . This method provides a systematic way to navigate the \"staircase\" of a matrix, ensuring that we can solve systems of any size—whether by hand or by programming a computer to do the heavy lifting for us.  In this section, we will define the \"goal\" states for our matrices: row echelon form and reduced row echelon form . We will also learn how to use these forms to quickly identify whether a system has a unique solution, infinitely many solutions, or no solution at all by identifying pivots and free variables .    After this section, students will be able to:     distinguish between a matrix in row echelon form and one in reduced row echelon form ;    apply the Gaussian Elimination Algorithm to transform an augmented matrix into (reduced) echelon form;    perform back substitution to find the solution to a system whose augmented matrix is in echelon form;    identify free variables and use them to express the solution set in parametric form .    determine if a system is consistent by checking for pivots in the rightmost column of the augmented matrix.      The method we have been talking about in for solving a system of linear equations using an augmented matrix and elementary row operations is called Gaussian Elimination . We now will learn some more terminology related to Gaussian Elimination and boil it down to an algorithm.  There are LOTS of different ways that you can go about solving a system using an augmented matrix and elementary row operations. You can do lots of different steps in lots of different orders and you can convert back to a system of linear equations at lots of different points in the process.  However, it will be helpful to learn a more algorithmic approach both for consistency with hand calculations and because a consistent algorithm is one that you can program a computer to execute.  In this section, we will learn two variants of the Gaussian Elimination algorithm. Both of them include what I will call Part 1 while the second includes a Part 2.  Let's solve the following system of linear equations we worked on in using the Gaussian Elimination algorithm. Then Richard will describe the algorithm in general.  The augmented matrix is The first thing we will do is to multiply Row 1 by to get The goal of that step was to have the first non-zero thing in Row 1 be a .  Next, we will add times Row 1 to Row 2 (and replace Row 2) to get The goal of that step was to make everything below that first a zero.  Then we will multiply Row 2 by to get Notice that now the coefficient matrix looks like a litter stair step with the first thing in each row a with only below it. This matrix is in what is called row echelon form .  When you reach that point, you have completed Part 1 of the Gaussian Elimination algorithm.  Now let's keep going with Part 2!  We will now add times Row 2 to Row 1 (and replace Row 1) to get The goal of that step was to turn \"everything\" above the first in Row 2 into a zero. Now the matrix is in what is called a reduced row echelon form . The difference being that now we have zeros above our staircase of 's.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if:   Every row consisting of only zeros must appear at the bottom of the matrix.    The first entry in any non-zero row is a . These are called the \"leading\" 's.    Every leading has only zeros below it (a \"leading \" is a that is the first non-zero number in a row).     A matrix is in reduced row echelon form if conditions 1-3 above are met AND every leading has only zeros above it.     Some variations on the above definition  If you read other textbooks, you may find that the second condition is considered as part of the definition condition for reduced row echelon form instead of row echelon form. That is, the first non-zero entry can be anything (of course, except for zero) in row echelon form, but it must be a (the leading ) in reduced row echelon form.  Practically, it doesn't make a difference how you define it, because you can always multiply a row by the reciprocal of its first non-zero entry to get a leading out of it.    Note: These definitions apply to regular matrices and to augmented matrices.  For example, the following matrices are all in row echelon form:   The following matrices (and the last one above) are all in reduced row echelon form:    Note on the homework system (and the second example above)  Technically, the full augmented matrix in the second example above is not in reduced row echelon form (but the coefficient matrix is, which is what we really care about). To get the full augmented matrix into reduced row echelon form, you would need to multiply the bottom row by to get a leading and then turn everything above that into a zero for a total of three more completely useless steps. There isn't anything gained by doing these steps because at this point it is already clear that there are no solutions to the system...  However, if you are asked for reduced row echelon form of an augmented matrix by the homework\/quiz, it will annoyingly expect those last steps.   When applying the Gaussian Elimination algorithm, the goal is to get the augmented matrix into row echelon form (Part 1) and\/or reduced row echelon form (Part 2). Here are the steps:   Step 0: If the matrix has only zeros in it, you are done!    Step 1: If any rows start out with one or more zeros, move them toward the bottom. The more zeros a row has before the first non-zero entry, the lower it goes on the list.    Step 2: Multiply Row 1 by the reciprocal of its first non-zero entry. This will give you your first leading .    Step 3: For each non-zero entry that appears directly below the leading , multiply Row 1 by the opposite (negative) of that number and add Row 1 to its row. This will give you all zeros below the leading .   Now the process is iterated! Apply the above procedure to the part of the matrix that excludes the first row and column. Repeat until either (1) the part you have left is all zeros, or (2) you get to the bottom of the matrix. In either case, the matrix will now be in row echelon form.   If you want to get a reduced row echelon form you will need to do Step 4:    Step 4: For each row that contains a leading , eliminate each non-zero entry above it by multiplying that row by the opposite of the non-zero entry and adding that to the row containing the non-zero entry.     Let's apply the method to try to solve this (larger) system of linear equations: The augmented matrix is Step 1 is already done since none of the rows starts out with a zero. So, let's do Step 2 and multiply the first equation by to get our first leading : Now let's do Step 3 and turn everything below our leading (in Row 1) into a zero! We will add times Row 1 to Row 2, add times Row 1 to Row 3, and add times Row 1 to Row 4. We get Now we imagine crossing out Row 1 and Column 1 and apply the method to what is left. Since the row with the most zeros in the beginning (Row 4) is already on the bottom and Row 2 and Row 3 have the same number of leading zeros, we still don't have to do anything for Step 1. Moving on to Step 2, we will multiply Row 2 by to get a leading in Row 2: Now we need to zero out all of the entries below this new leading . All we have to do is add times Row 2 to Row 3 to get And now our matrix is in row echelon form because everything below Row 2 is a zero!  To get our matrix into reduced row echelon form, we need to zero out everything above my leading s (Step 4). But there is nothing above the first leading obviously, so we just have to worry about the leading in Row 2. We will add times Row 2 to Row 1 to get Now the matrix is in reduced row echelon form!  If we convert the reduced row echelon form of the augmented matrix back to a system of linear equations, we get So we know that and we can see that . So the solution is or where is our parameter and can be anything.  But if we stopped early and converted to a system of linear equations after getting the matrix into row echelon form, we get Again, we know that and we can solve for in terms of and : But isn't a parameter! It's just , so we have to \"back substitute\", plugging this value into the equation for to get    But Richard... Should I use row echelon form or reduced row echelon form?  Both row echelon form and reduced row echelon form can be used to solve a system of equations. If it is EASY to do Step 4 and put your matrix into reduced row echelon form, you can basically just write down your answer! But if it is not so easy, then you are usually better off stopping with row echelon form IF your goal is just to solve the system. However, you will have to do an additional step of \"back substitution\" in order to solve the system.   Later on we will some applications of the algorithm that require reduced row echelon form. When the time comes, Richard will explain why it is needed in those cases.     Solve the following system of linear equations using the Gaussian Elimination algorithm.    The augmented matrix is   Step 1: Add times Row 1 to Row 2 (and replace Row 2) to get   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get   Step 3: Multiply Row 2 by to get   Step 4: Add times Row 2 to Row 3 (and replace Row 3) to get   Step 5: Multiply Row 3 by to get   Now the matrix is in row echelon form. We can convert it back to a system of linear equations. We get We will then back substitute to solve for and : Hence, the solution is .  Alternatively, we can keep going with the algorithm to obtain the reduced row echelon form of the augmented matrix.  Step 6: Add times Row 3 to Row 2 (and replace Row 2) to get   Step 7: Add times Row 3 to Row 1 (and replace Row 1) to get   Step 8: Add times Row 2 to Row 1 (and replace Row 1) to get Hence, the solution is .     How many parameters does the solution have?  We use parameters to write the solution only when there are infinitely many solutions. And we can tell how many parameters we have by counting how many leading s we have when we put our matrix in row echelon form!    All we have to do is to subtract the number of leading s from the total number of variables.   Each leading is associated with a variable that we can solve for in terms of the other variables. The author of your textbook calls these the \"leading variable\". The other variables are called \"free variables\" and these are the ones that can be used as parameters (or if you do it like the author, these are the variables you can set equal to new letters that you use for the parameters).  In the exapmle we just did, and are leading variables, and is the only free variable. So we only need one parameter to write the solution. The solution in parametric form is or if you want to use a new letter like the author would do.   Note: It doesn't matter whether you are in reduced row echelon form or just row echelon form, you will have the same number of leading s (and so the same number of leading variables and free variables).  Pretend that we had a system of 4 linear equations in 5 variables and we put the augmented matrix into row echelon form and we got This time we have 3 leading s, so we have 3 leading variables. These are , , and . We also have free variables, and they are and .  Since the matrix isn't in reduced row echelon form, we will have to do some back substitution to get the solution. Converting it to a system of linear equations, we get Now we will be able to see why it is called \"back substitution\", because we go backwards!  First, we will ignore the . It is true (which is important!) but it doesn't actually help us figure out the solution.  We see that , then we substitute that \"back\" into our second equation to get Then we substitute and back into our first equation to get So we will treat the and as free variables (parameters) and write the solution. The solution set is all points of the form where and can be any real numbers.  Because of the importance of the leading s, there are special terms for it.   Pivots, Pivot Columns, and Rank   A pivot position in a matrix is a location that corresponds to a leading in (reduced) row echelon form.  A pivot column is a column that contains a pivot position.  The rank of a matrix is the number of leading s in (reduced) row echelon form, which is the same as the number of pivot positions and the same as the number of pivot columns.     Note: Rank is a term reserved for regular matrices, not augmented matrices. If someone asks for the rank of an augmented matrix, they mean the coefficient part of the matrix (the part to the left of the vertical line(s)). Also, we will learn a better (but equivalent) definition of rank later in the term.    Existence and Uniqueness Questions  Imagine we have an inconsistent system of linear equations. Then its augmented matrix, in row echelon form, will have a row of the form which corresponds to the equation . The is a pivot position (since this is the first non-zero entry in its row and we can easily turn it into a leading ). This implies that a system is inconsistent if there is a pivot position in the rightmost column (the one to the right of the vertical lines(s) which represents the constant matrix). Furthermore, if there is a pivot position in the rightmost column, then the rightmost column is a pivot column. Let's make it a theorem!   Existence and Uniqueness Theorem   A linear system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column. That is, if an only if an echelon form of the augmented matrix has no row of the form   If a linear system is consistent, then the solution set contains either (1) a unique solution, when there are no free variables, or (2) infinitely many solutions, when there is at least one free variable.    Next week, we will develop a (more sophisticated) version of the above theorem (using the rank of the matrices) when we learn more about matrices (and matrix equations). For now, we will just use the term \"pivot column\" instead of \"rank\" for our augmented matrices.   Each of the following matrices represents the augmented matrix of a system of linear equations. Determine whether the system is consistent or not, and if it is consistent, determine whether the solution is unique.                       The system is consistent because there is no pivot position in the rightmost column. Also, there is exactly one solution because there are three pivot positions and three variables.    The system is inconsistent because there is a pivot position in the rightmost column.    The system is consistent because there is no pivot position in the rightmost column. Also, there are infinitely many solutions because there are only three pivot positions but four variables, so there is a free variable.        "
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
  "id": "sec22-MatrixVectorMultiplication",
  "level": "1",
  "url": "sec22-MatrixVectorMultiplication.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix-Vector Multiplication",
  "body": " Matrix-Vector Multiplication   Now we get to the cool part! We are going to learn how to multiply a matrix by a vector. This is SUPER IMPORTANT for three reasons:   This corresponds to evaluating a linear transformation at a point which leads to tons of cool geometry stuff. Much more about this in the future!    It is the foundation for multiplying matrices (which is probably the most important thing in Matrix Algebra and corresponds to composing linear transformations).    It gives us new ways to think about systems of equations!   Takeaway: make sure you are an expert at multiplying a vector by a matrix!    After this section, students will be able to:     represent a system of linear equations in four equivalent forms: a system of equations, an augmented matrix, a matrix equation, and a vector equation.    multiply a matrix by a vector using both the dot product method and the linear combination method.    determine the existence of solutions for a system of linear equations by comparing the rank of the coefficient matrix and the rank of the augmented matrix.    see the connection between matrix-vector multiplication and linear transformations.    identify and apply the properties of two special matrices: the identity matrix and the zero matrix, in the context of multiplying a matrix by a vector.       Quick Notes about Vector Notation  We already know that we can represent a point in the plane as an ordered pair like . And we also know that two points in the plane, and , are equal if (and only if) both coordinates are exactly the same. In other words, if and only if and .  This generalizes immediately to the set of ordered -tuples of real numbers : And if and only if , , , .  You may recall, when dealing with or we will sometimes use the conventions from calculus (and precalculus) and use , , and to represent the 2 (or 3) coordinates and use subscripts to distinguish different points. However, in this class, it will be more common to do the opposite. We will use the more general convention of using different letters for different points and using the subscripts to denote the different coordinates. So in this class, we will mostly be writing things like and NOT .  You may also notice that when we write a point in in this way, the point looks kind of like a row matrix: But most often we will represent points in as column matrices:   One last observation: is closed under the operations of scalar multiplication and matrix (vector) addition. In other words, if you multiply a vector in by a scalar the answer is also in . And if you add two vectors in the answer is in .    What exactly is an Augmented Matrix?  Consider the augmented matrix You may have heard Richard saying that an augmented matrix is a \"fake\" matrix but is really just a shorthand notation to represent a system of linear equations. It turns out that an augmented matrix actually hides three matrices, two of which are vectors (aka. column matrices). Hence, an augmented matrix is really three matrices smashed together to represent a system of linear equations in a convenient way.  The left side of an augmented matrix is the coefficient matrix . For our (general) example above, the coefficient matrix is   The right side of an augmented matrix is the constant matrix or constant (column) vector . For our example, the constant vector is   To figure out what the third matrix\/vector is, let's convert the augmented matrix to a system of linear equations! For our example, we get First, notice that this system of equations can be seen as one equation involving two matrices\/vectors! You may have noticed that the solution is the one part of our system that we haven't talked about as a matrix\/vector yet. Well let's fix that now!  The vector on the left-hand side is the one that we get when we multiply the coefficient matrix by the solution vector  when represented as a column vector: In other words our system of equations can be represented by the matrix equation : Or using the names of the matrices:     Multiplying a Matrix by a Vector  Now let's take a deeper look at the product and try to figure out how to multiply a matrix by a vector. For our example, we had So what is happening?  First notice that we are multiplying a matrix by a matrix and getting a matrix. Also, notice that the first (top) entry of the answer is achieved by multiplying each entry in the first row of the matrix by the corresponding entry of the column vector and adding the results. First thing in the row times first thing in the column plus second thing in the row times second thing in the column and so on...   The first entry is    Then the second entry in the answer is achieved in the same way but using the second row of the matrix :   The second entry is    Then the third entry in the answeris achieved in the same way but using the third row of the matrix :   The third entry is    And finally the fourth entry in the answer is achieved in the same way but using the fourth row of the matrix :   The fourth entry is    When we run out of rows of , we are done!   Let's try this out with the following product of a matrix and a vector:   First, we take the first row of the matrix and multiply each entry by the corresponding entry in the column vector and add the results: Next, we take the second row of the matrix and do the same thing: Finally, we take the third row of the matrix and do the same thing: So the answer is     Multiply! If it is impossible, say why!               a.   b. This is impossible! There are three things in each row of the matrix but four things in the vector. There is nothing to multiply by the !      Existence and Uniqueness Questions  Recall a consistent system of linear equations has at least one solution and an inconsistent system of linear equations has no solutions. We have looked at the existence question in the past in two different ways:   In , when converting an augmented matrix to a system of linear equations and there is one equation that is always false (like ), then the system is inconsistent .    In , when an augmented matrix has a pivot position in the rightmost column (aka the constant column), then the system is inconsistent .   We will look at the same question again but in a new perspective. Back in , we define the rank of a matrix to be the number of pivot positions (aka the leading s) in the matrix. Now that we have two different matrices: the augmented matrix and the coefficient matrix, how do their ranks relate to the existence question?  Consider the following system of equations: The augmented matrix is... If we put this matrix into row echelon form, we get Notice that the rank of this augmented matrix (if we pretend it is a real matrix) is because there are two leading s. But if we look only at the coefficient matrix (the part to the left of the vertical lines) we see that the rank is because there is only one leading .   Those ranks are different! Maybe that means something?   Let's write this nice (row echelon) version of the system as a matrix equation! The coefficient matrix is and the constant vector is . This is a two-variable system, so the solution matrix looks like . So as a matrix equation, our system is   Okay... so now let's think about what will happen when we multiply our vector by the coefficient matrix . When we get to the second row (to find the second entry in the answer), we will multiply both and by zero. That means we will get not like we are supposed to get! So this system has no solution! In other words, it is inconsistent !   Notice that this happened because the rank of the augmented matrix was BIGGER than the rank of the coefficient matrix!   That can only happen if there is a leading in the last column of the augmented matrix (the constant vector). And that will always result in no solution because it will always give you when you convert back to a system of equations (see how things are connected back to the two perspectives of the existence questions).  Your textbook makes this a nice little theorem with no proof (yes the textbook literally says \"with no proof\"). With the above example in mind, you may be able to see why the theorem is true.    For a system of linear equations with corresponding matrix equation , the augmented matrix will be .  Suppose the rank of the coefficient matrix is . Then   The rank of the augmented matrix is either equal to or .  This is because the augmented matrix just has one extra column which gives a spot for at most one more leading in that column (which can only happen if there is a row of the coefficient matrix that is all zeros after putting it in row echelon form).    The system is consistent if an only if the rank of is .  In this situation, any time a row of the coefficient matrix gets zeroed out, there is also a zero in the constant column of that row. So in this situation we never have a equation after we put the augmented matrix in row echelon form.  What I didn't prove was that in this nice situation we always get at least one solution. You should be able to convince yourself that you always will be able to start at the bottom and back-substitute and either get one solution (if there are no free variables) or infinitely many (if there are some free variables).    The system is inconsistent if and only if the rank of is .  This happens exactly when there is a row that is all zeros except for a in the constant spot (the rightmost column). That corresponds to a situation. So there are no solutions.  As noted in the previous item, I did not prove that this is the ONLY way to get no solution, but if you imagine the substitution process (after putting the system into row echelon form) you can see that this is the only thing that can prevent you from getting a solution!    Fun logic fact: Item 3 is actually redundant and is already covered by item 1 and 2! That is, if item 1 and 2 are true, then item 3 must be true as well!      Vector Equations  So far we have three different ways to represent a system of linear equations: (1) as a system of equations, (2) as an augmented matrix, and (3) as a matrix equation. There is actually a fourth way to represent a system of linear equations: as a vector equation .  Let's again consider the system of linear equations Remember that we can think of our original system of equations as representing an equation involving two vectors: Now let's do the same technique we used to write a solution as a linear combination of basic vectors. Specifically, let's first break up the vector on the left-hand side into three vectors. One with in it, one with in it, and one with in it: Now let's factor out the scalars , , and to get: Substituting this last version into our original equation, we get the vector equation : Notice that this vector equation tells us that we get a solution to a system of linear equations precisely when the constant vector is a linear combination of the columns of the coefficient matrix . See how the column vectors on the left-hand side are just the columns of the coefficient matrix?!?! See how the solution vector is just the set of scalars (coefficients) used to write this linear combination of the column vectors?!?! This observation will be important to keep in mind!   Consider the following system of linear equations: Write this system as a (1) Augmented Matrix, (2) a Matrix Equation, and (3) a Vector Equation.   The augmented matrix is   The matrix equation is   The vector equation is     The Vector Equation gives us yet another way to multiply a vector by a matrix! Let's compare the Matrix Equation and the Vector Equation for a system of linear equations: The Matrix Equation is The Vector Equation is This means that So that means that the left-hand side of the Vector Equation actually gives us a second way to multiply a vector by a matrix. You just compute the linear combination of the columns using the vector to get your scalars.   Let's multiply the following matrix and vector in this new way:   We treat the columns of the matrix as vectors and compute the linear combination of those vectors using the entries of the column vector as our scalars. This is the same answer as before!     Intro to Linear Transformations  It turns out that every matrix actually defines a function. Specifically, a matrix defines a function from to .   Any point in can be represented by a column vector. For example, the point can be represented by .  Let . If we take that point and multiply it by the matrix , we get   This is a function! We started with the input and we \"plugged\" that point into our function by multiplying it (as a column vector) by . This gave us the output .  Let's call this function . It is defined by the rule   We can take any matrix and use that rule and will get a function! The inputs need to have the same number of coordinates as the matrix has columns. And the outputs will have the same number of coordinates as the matrix has rows.   The function given by a matrix, using the rule , is a special kind of function called a linear transformation . We will learn more about linear transformations at the end of the term. But since we just learned how to multiply a matrix by a vector and that defines a linear transformation, let's spend a bit of time thinking about the geometry of such transformations.   Suppose that . The function given by will be a function from to . So it maps points on the plane to points on the plane.  Let's figure out what this transformation does geometrically by doing the following:   Draw a rectangle centered at and label the four vertices. This is your \"before\" picture.    Plug in each of the four vertices using the rule (write the points as column vectors and multiply!)    Plot the four outputs and connect the dots.    Describe what happened to your rectangle.      I will start with a rectangle with vertices , , , and   First, let's connect the dots to draw our rectangle. This is our \"before\" picture.   Plugging in each of the vertices to our transformation, we get Let's graph the outputs and connect the dots. This is our \"after\" picture.   So what does the transformation do? It is a flip (across the line ) and a stretch (by a factor of )!  It actually turns out that the functions defined this way (multiplying vectors by a matrix) always do some combination of the following to the plane: Stretch, Reflect (Flip), Rotate.      Intro to the Dot Product  The first method of multiplying matrices that we learned was actually based on the dot product which is an operation performed on two vectors (of the same size) and the produces a scalar . Sometimes it is actually called a scalar product to emphasize the fact that the output is a scalar.  So how does it work? Let's look at the formula for multiplying a vector by a matrix. For the case of a general matrix, we saw that we could multiply by a column vector. Notice that this result actually comes from performing the same process four different times (once for each row of the matrix).  What we were actually doing was taking the dot product of each row with the column vector. So our multiplication computation consisted of four dot products each of which gave us one of the entries in our answer.   Dot Product   Let and be two vectors in . The dot product of and , denoted by , is the scalar given by the formula      Let's compute the dot product of the vectors and .    Scroll up a bit and you will see the dot product formula show up in each entry where we multiplied the general matrix by a vector. To get the th entry of the answer, we can take the dot product of the th row of the matrix and the vector.  We will talk more about this soon when we learn how to multiply two matrices together.    Two Special Matrices  Recall there are two special numbers in arithmetic: and , in the sense that (1) times any number is and (2) times any number is that same number. There are also two special matrices in matrix arithmetic that play the same role as and do in regular arithmetic.  In the last section, we defined the zero matrix to be the matrix with all entries equal to . If is the zero matrix then for any vector , we have where is the zero vector in .  That is because each time you compute a dot product to get an entry of the answer, you are taking a dot product with a row vector where all entries are zero. So you are always just adding up a bunch of zeros. So you will always get zero for every entry in the product.  The matrix equivalent of is called the identity matrix . That is, when we multiply the identity matrix by a vector, we get the same vector back.  For every positive integer , there is a special matrix called the identity matrix of size . The identity matrix has a in every entry of the main diagonal and a in every other spot.  For example, the identity matrix of size is and the identity matrix of size is When the size is obvious from context, we don't need the little subscript in the name for the identity matrix. We just call it .  But why does the identity matrix look like that? Imagine we multiply by an arbitrary vector . We get    "
},
{
  "id": "sec22-MatrixVectorMultiplication-2-2",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#sec22-MatrixVectorMultiplication-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     represent a system of linear equations in four equivalent forms: a system of equations, an augmented matrix, a matrix equation, and a vector equation.    multiply a matrix by a vector using both the dot product method and the linear combination method.    determine the existence of solutions for a system of linear equations by comparing the rank of the coefficient matrix and the rank of the augmented matrix.    see the connection between matrix-vector multiplication and linear transformations.    identify and apply the properties of two special matrices: the identity matrix and the zero matrix, in the context of multiplying a matrix by a vector.    "
},
{
  "id": "subsec-Basics-Vector-6",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-Basics-Vector-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed "
},
{
  "id": "subsec-DecodeAugmentedMatrix-3",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DecodeAugmentedMatrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "subsec-DecodeAugmentedMatrix-4",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DecodeAugmentedMatrix-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant matrix constant (column) vector "
},
{
  "id": "subsec-DecodeAugmentedMatrix-6",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DecodeAugmentedMatrix-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix equation "
},
{
  "id": "subsec-MultiplyingMatrixVector-4",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-MultiplyingMatrixVector-4",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": " Let's try this out with the following product of a matrix and a vector:   First, we take the first row of the matrix and multiply each entry by the corresponding entry in the column vector and add the results: Next, we take the second row of the matrix and do the same thing: Finally, we take the third row of the matrix and do the same thing: So the answer is   "
},
{
  "id": "subsec-MultiplyingMatrixVector-5",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-MultiplyingMatrixVector-5",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " Multiply! If it is impossible, say why!               a.   b. This is impossible! There are three things in each row of the matrix but four things in the vector. There is nothing to multiply by the !   "
},
{
  "id": "subsec-ExistenceUniqueness-Rank-2",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-ExistenceUniqueness-Rank-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent rank "
},
{
  "id": "thm-Existence_Rank",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#thm-Existence_Rank",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  For a system of linear equations with corresponding matrix equation , the augmented matrix will be .  Suppose the rank of the coefficient matrix is . Then   The rank of the augmented matrix is either equal to or .  This is because the augmented matrix just has one extra column which gives a spot for at most one more leading in that column (which can only happen if there is a row of the coefficient matrix that is all zeros after putting it in row echelon form).    The system is consistent if an only if the rank of is .  In this situation, any time a row of the coefficient matrix gets zeroed out, there is also a zero in the constant column of that row. So in this situation we never have a equation after we put the augmented matrix in row echelon form.  What I didn't prove was that in this nice situation we always get at least one solution. You should be able to convince yourself that you always will be able to start at the bottom and back-substitute and either get one solution (if there are no free variables) or infinitely many (if there are some free variables).    The system is inconsistent if and only if the rank of is .  This happens exactly when there is a row that is all zeros except for a in the constant spot (the rightmost column). That corresponds to a situation. So there are no solutions.  As noted in the previous item, I did not prove that this is the ONLY way to get no solution, but if you imagine the substitution process (after putting the system into row echelon form) you can see that this is the only thing that can prevent you from getting a solution!    Fun logic fact: Item 3 is actually redundant and is already covered by item 1 and 2! That is, if item 1 and 2 are true, then item 3 must be true as well!   "
},
{
  "id": "subsec-VectorEquations-2",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-VectorEquations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "subsec-VectorEquations-3",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-VectorEquations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "subsec-VectorEquations-4",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-VectorEquations-4",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": " Consider the following system of linear equations: Write this system as a (1) Augmented Matrix, (2) a Matrix Equation, and (3) a Vector Equation.   The augmented matrix is   The matrix equation is   The vector equation is    "
},
{
  "id": "subsec-VectorEquations-6",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-VectorEquations-6",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": " Let's multiply the following matrix and vector in this new way:   We treat the columns of the matrix as vectors and compute the linear combination of those vectors using the entries of the column vector as our scalars. This is the same answer as before!  "
},
{
  "id": "subsec-LinearTransformations-Intro-3",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-LinearTransformations-Intro-3",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " Any point in can be represented by a column vector. For example, the point can be represented by .  Let . If we take that point and multiply it by the matrix , we get   This is a function! We started with the input and we \"plugged\" that point into our function by multiplying it (as a column vector) by . This gave us the output .  Let's call this function . It is defined by the rule   We can take any matrix and use that rule and will get a function! The inputs need to have the same number of coordinates as the matrix has columns. And the outputs will have the same number of coordinates as the matrix has rows.  "
},
{
  "id": "subsec-LinearTransformations-Intro-4",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-LinearTransformations-Intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "subsec-LinearTransformations-Intro-5",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-LinearTransformations-Intro-5",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": " Suppose that . The function given by will be a function from to . So it maps points on the plane to points on the plane.  Let's figure out what this transformation does geometrically by doing the following:   Draw a rectangle centered at and label the four vertices. This is your \"before\" picture.    Plug in each of the four vertices using the rule (write the points as column vectors and multiply!)    Plot the four outputs and connect the dots.    Describe what happened to your rectangle.      I will start with a rectangle with vertices , , , and   First, let's connect the dots to draw our rectangle. This is our \"before\" picture.   Plugging in each of the vertices to our transformation, we get Let's graph the outputs and connect the dots. This is our \"after\" picture.   So what does the transformation do? It is a flip (across the line ) and a stretch (by a factor of )!  It actually turns out that the functions defined this way (multiplying vectors by a matrix) always do some combination of the following to the plane: Stretch, Reflect (Flip), Rotate.   "
},
{
  "id": "subsec-DotProduct-Intro-2",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DotProduct-Intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product scalar product "
},
{
  "id": "subsec-DotProduct-Intro-4",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DotProduct-Intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "def-DotProduct-Intro",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#def-DotProduct-Intro",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Dot Product.",
  "body": " Dot Product   Let and be two vectors in . The dot product of and , denoted by , is the scalar given by the formula    "
},
{
  "id": "subsec-DotProduct-Intro-6",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-DotProduct-Intro-6",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": " Let's compute the dot product of the vectors and .   "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-3",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-ZeroMatrix-IdentityMatrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero matrix "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-5",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-ZeroMatrix-IdentityMatrix-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "subsec-ZeroMatrix-IdentityMatrix-6",
  "level": "2",
  "url": "sec22-MatrixVectorMultiplication.html#subsec-ZeroMatrix-IdentityMatrix-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "sec23-MatrixMultiplication",
  "level": "1",
  "url": "sec23-MatrixMultiplication.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication   In our previous work, we established how to multiply a matrix by a single column vector. In this section, we will extend this concept to multiply a matrix by another matrix. As you will see, multiplying two matrices is essentially just performing matrix-vector multiplication multiple times.    After this section, students will be able to:     compute the product of two matrices;    determine whether two matrices can be multiplied based on their sizes and state the size of the answer matrix;    understand the rules for matrix multiplication;    recognize and demonstrate that matrix multiplication is generally not commutative.      Recall when you multiply a column vector by a matrix, you just compute the dot product of that vector by each row vector of the matrix. Then you get a nice column vector.  If you want to multiply a matrix by another matrix, you just do that for every column of the matrix on the right and you get all of the columns in your answer matrix. And that is how you multiply matrices!   Let's multiply the following two matrices   Oberve that the matrix on the right consists of two columns. We know how to multiply the column (aka a column vector) by the matrix. Let's do that! and Then the first column vector we get is the first column in the answer matrix and the second column vector we get is the second column in the answer matrix. That is,    Writing out the general formula for matrix multiplication using all the little subscripts would be horrible. But there is a clever way to write matrices that makes it a bit easier.  Suppose you want to multiply a matrix by the matrix . Instead of writing down all the entries of using double subscripts, we can write the matrix as a collection of columns using single subscripts. So the matrix looks like this: Then where each column of the answer is a product of with the corresponding column vector of . And each of those products are computed by taking the dot product of each row of with that column vector.  Summary: the entry of the matrix is computed by taking the dot product of the th row of with the -th column of (rows times columns).   Multiply! If it is impossible, say why!               1.   2. This is impossible. You can't multiply a matrix by a matrix. None of the dot products work!  For example, if you want to find the entry in the answer matrix, then you would find the dot product of the first row of the matrix to the left and the first column of the matrix to the right. But... there are three entries in the first row vector and four entries in the column vector... The sizes don't work out... (there is nothing we can multiply by the )...    To make sure the dot products work out for matrix multiplication, we want to make sure the number of columns in the first matrix matches up with the number of rows in the second matrix. That is, to multiply two matrices and with the size of being , the size of must be . The answer matrix is of the size of .  New operation means more rules! Here is a theorem that collects some rules about matrix multiplication.   Matrix Multiplication Rules   Suppose , , and are matrices that are the right size for the products to be defined. And suppose is the identity matrix that is the right size as well. The following properties hold:    Identity Property : and      Associativity :     (Left) Distributive Property :     (Right) Distributive Property :      Regrouping with Scalar Multiplication ; For any scalar ,      Transpose of a Product :        The first five rules should not be surprising. Spend some time to convince yourself why they are true!   Proof Ideas and Sketches Using Smaller Matrices     The first equation follows from multiplying the identify matrix by a column vector. You get that same column vector as the answer. Since that would happen for every column of , you will get as your answer.  The second equation is true because when you multiply by the th column of , the single in the th row of that column will reproduce the th column of the matrix.    This one gets messy when the matrices start getting bigger, so let's verify it in the case. The proof in general works the same just with a lot more subscripts to juggle! and Comparing the results, we can see that the matrix multiplication is associative because multiplication of numbers is!    This one isn't quite as messy as the previous one, but still warrants limiting to case:     The verification of this one works just like the previous one with the obvious changes. Again it comes down to the fact that we have the distributive property in basic arithmetic.    I encourage you to verify this for the case. This one is much less messy than the ones we have done!      You may find the last rule a bit surprising. Why isn't equal to ?  This surprise should tell you that matrix multiplication is not commutative!  Let's verify this one for the case! If you computed and compare it to this you would find you would NOT get this result! But if we commute all of the products inside this matrix... This is what you would get for !   Observe that commutativity is not included in the theorem. That is because matrix multiplication is NOT commutative, which means in general it is NOT true that . Sometimes it happens that way but often it does not!  A quick counter-example can show that matrix multiplication is non-commutative. Let and . Observe that but Hence ...  "
},
{
  "id": "sec23-MatrixMultiplication-2-2",
  "level": "2",
  "url": "sec23-MatrixMultiplication.html#sec23-MatrixMultiplication-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     compute the product of two matrices;    determine whether two matrices can be multiplied based on their sizes and state the size of the answer matrix;    understand the rules for matrix multiplication;    recognize and demonstrate that matrix multiplication is generally not commutative.    "
},
{
  "id": "sec23-MatrixMultiplication-5",
  "level": "2",
  "url": "sec23-MatrixMultiplication.html#sec23-MatrixMultiplication-5",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": " Let's multiply the following two matrices   Oberve that the matrix on the right consists of two columns. We know how to multiply the column (aka a column vector) by the matrix. Let's do that! and Then the first column vector we get is the first column in the answer matrix and the second column vector we get is the second column in the answer matrix. That is,   "
},
{
  "id": "sec23-MatrixMultiplication-9",
  "level": "2",
  "url": "sec23-MatrixMultiplication.html#sec23-MatrixMultiplication-9",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " Multiply! If it is impossible, say why!               1.   2. This is impossible. You can't multiply a matrix by a matrix. None of the dot products work!  For example, if you want to find the entry in the answer matrix, then you would find the dot product of the first row of the matrix to the left and the first column of the matrix to the right. But... there are three entries in the first row vector and four entries in the column vector... The sizes don't work out... (there is nothing we can multiply by the )...   "
},
{
  "id": "thm-RulesMatrixMultiplication",
  "level": "2",
  "url": "sec23-MatrixMultiplication.html#thm-RulesMatrixMultiplication",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Matrix Multiplication Rules.",
  "body": " Matrix Multiplication Rules   Suppose , , and are matrices that are the right size for the products to be defined. And suppose is the identity matrix that is the right size as well. The following properties hold:    Identity Property : and      Associativity :     (Left) Distributive Property :     (Right) Distributive Property :      Regrouping with Scalar Multiplication ; For any scalar ,      Transpose of a Product :       "
},
{
  "id": "sec23-MatrixMultiplication-14",
  "level": "2",
  "url": "sec23-MatrixMultiplication.html#sec23-MatrixMultiplication-14",
  "type": "Proof",
  "number": "2.3.1",
  "title": "Proof Ideas and Sketches Using Smaller Matrices.",
  "body": " Proof Ideas and Sketches Using Smaller Matrices     The first equation follows from multiplying the identify matrix by a column vector. You get that same column vector as the answer. Since that would happen for every column of , you will get as your answer.  The second equation is true because when you multiply by the th column of , the single in the th row of that column will reproduce the th column of the matrix.    This one gets messy when the matrices start getting bigger, so let's verify it in the case. The proof in general works the same just with a lot more subscripts to juggle! and Comparing the results, we can see that the matrix multiplication is associative because multiplication of numbers is!    This one isn't quite as messy as the previous one, but still warrants limiting to case:     The verification of this one works just like the previous one with the obvious changes. Again it comes down to the fact that we have the distributive property in basic arithmetic.    I encourage you to verify this for the case. This one is much less messy than the ones we have done!     "
},
{
  "id": "sec24-MatrixInverse",
  "level": "1",
  "url": "sec24-MatrixInverse.html",
  "type": "Section",
  "number": "2.4",
  "title": "Matrix Inverses",
  "body": " Matrix Inverses   In our journey through linear algebra, we have explored how to multiply matrices and how to represent systems of equations as the matrix equation . A natural mathematical question arises: can we \"undo\" matrix multiplication? In the realm of real numbers, we solve algebraic equations like by multiplying by the reciprocal (or inverse) of . In this section, we investigate whether a similar structural concept exists for matrices.    After this section, students will be able to:     determine if a matrix is invertible;    find the inverse of a invertible matrix using a formula;    find the inverse of an invertible matrix using the Gaussian Elimination algorithm;    solve systems of linear equations using matrix inverses.       Let . Find a matrix such that where is the identity matrix.   There are two possible strategies:   Strategy #1: Guess and check! This strategy is doable for a matrix but usually quite tedious. The matrix is made special so that it isn't too bad at all.   Strategy #2: Remember how matrix multiplication works: When we multiply by , each column of the answer is found by multiplying the corresponding column of by .  So we know that if is the first column of , then we will need to be since that is the first column of the identity matrix. If we call the entries of that column and , then we can solve a system of equations to figure out what and are!  Then we can do a similar process to figure out what the second column of is!    Using Strategy #1...  You probably discovered that the only way to get the in the top left of the answer is to put a in the bottom left of . Then you can figure out that you need a in the top left of to get the in the bottom left of the answer.  Now you need a in the top right of the answer. because of the in , your answer for this spot will be times whatever you put in the bottom right of . So that has to be a .  Finally that in the bottom right of means that you need a in your top right spot in order to get the you need in the bottom right of the identity matrix. So the matrix     Using Strategy #2...  If we call our first column of  , then we know that we need We can solve this using the substitution method easily since the top equation tells us and substituting this into the second equation gives us So the first column of will have to be .  Now if we call our second column of  , then we know that we need This one is even quicker to solve because the top equation tells us and substituting this into the second equation gives us . So the second column of will have to be .  Therefore, the matrix .  And we can quickly verify that :    Now that you found , take a minute and compute .    is also !    This matrix is a special buddy of . This is called the inverse of !   Inverse of a Matrix   Inverse of a Matrix   If is a square matrix, a matrix is called an inverse of if and only if . A matrix that has an inverse is called an invertible matrix .      An exmaple:  is invertible and since...    A non-example:  is NOT invertible because no matter what matrix you try you will get a row of zeros:      A matrix can only have one inverse.     Suppose and are both inverses of . Then This means .  Multiplying both sides of equation (on the left) by , we get Using the associative property, we get Since we also know that , then .  So by the identity property, .   In the case, there is a quick way to find out if a matrix is invertible and there is a nice formula for the inverse. We just have to define two terms:   Determinant of Matrices   Let be a matrix. The determinant of the matrix is defined by      Adjugate of Matrices   Let be a matrix. The adjugate of the matrix is The adjugate of can be obtained by (1) swapping the elements in the main diagonal, and (2) changing the sign of the elements not on the main diagonal.    The matrix is invertible if and only if . And is    Let . Notice that Since , we know that exists.  We can also find . We know that . Then   If you want to verify that is indeed the inverse of , try multiplying them together and you should get back .   Remember how we worked so hard to solve systems of linear equations in week 1? And remember that every system of linear equations can be written as a Matrix Equation in week 2? Well, if the coefficient matrix is invertible, then we can solve this equation using just like back in Algebra 1!  Let's assume that is invertible, then . Say we have a Matrix Equation . We certainly can multiply the same thing (say ) on two sides of the equation. We get So the solution to this equation must be .  If you want to verify that this is indeed a solution, then we can plug in into the left side of our equation. We see that So this really is a solution to the equation! Let's make it a theorem!    If is an invertible matrix, then the Matrix Equation has exactly one solution. The solution is .     Consider the following system of linear equations: The Matrix Equation version of this system is , where   Notice that So is invertible! We can find the solution using the little theorem we just came up with!  Since , then we get By our theorem, the solution to the system is     Solve the following system of linear equation by   writing the system as a Matrix Equation;    finding the inverse of the coefficient matrix;    using the inverse to solve the system.      1. The matrix equation is   2. The determinant is and the adjugate matrix is , so the inverse is   3. The solution is     There is another way to compute inverse matrices efficiently, which is using the Gaussian Elimination algorithm we learned back in .  Suppose we want to find the inverse of a matrix . That is, we are looking for a matrix such that Since we multiply these matrices by multiplying the by each of the column vectors and , the first matrix-vector product needs to give us the first column of and the second matrix-vector product needs to give us the second column of . That means that finding the inverse boils down to solving two systems of equations given by the matrix equations: Observe that these two systems of linear equations have the same coefficient matrix. So if we used augmented matrices, we would end up doing the same steps to put the matrices into reduced row echelon form.  The technique based on this idea is to put these two equations into ONE giant augmented matrix: But it gets even better! Let's do an example...   Let's say we want to find the inverse of the matrix . We will first make our big augmented matrix: Now we will put this thing into reduced row echelon form!  Step 1: Swap Row 1 and Row 2, we get We have our first leading and it already has a zero beneath it.  Step 2: Multiply Row 2 by , we get Now the matrix is in row echelon form. Let's get it into reduced row echelon form by getting a zero above the second leading .  Step 3: Multiply times Row 2 to Row 1 (and replace Row 1), we get Notice that the part on the left is the identity matrix. And, notice that the part on the right is the inverse!   That is basically the technique:   Step 1: Make a big augmented matrix with on the left side and on the right side.    Step 2: Put the augmented matrix into reduced row echelon form.   If the matrix is invertible, then the reduced row-echelon form will have on the left side and on the right side.   Use the Gaussian Elimination algorithm to find the inverse of the matrix    The big augmented matrix is   First let's get zeros beneath our first leading :   Now we need to get our second leading by multiplying Row 2 by :   Now we need a zero beneath our second leading . We can multiply Row 2 by and adding it to Row 3:   Now to get our last leading , we need to multiply Row 3 by :   Then we need to get zeros above this third leading . So, let's add times Row 3 to Row 2 and -3 times Row 3 to Row 1:   So the inverse is       Important Theorems and Facts about Inverses   Cancellation Law for Matrices   Suppose and are matrices and is an invertible matrix. Then the following holds:   If , then .    If , then .        Part 1: Suppose . Then Therefore,   The proof of Part 2 would be similar.     Suppose is invertible. Then the inverse of is the transpose of . That is,      Suppose is invertible. Then But and . Substituting these into the above equation, we get So the inverse of is the transpose of .     If and are invertible matrices and is defined, then     This is also called \"shoes and socks\" because you take off your shoes and socks in the reverse order in which you put them on. That is what this theorem says about matrix inverses.       There are also a collection of a bunch of facts about inverses (including some of the ones we have just mentioned).  Suppose the following matrices are all square and the same size.    is invertible and .    If is invertible, so is and .    If and are invertible, so is , and .    If are all invertible, so is their product , and .    If is invertible, then so is , and .    If is invertible and is a number, then is invertible and .    If is invertible, so is its transpose , and .     It is super important to be able to tell whether a matrix is invertible. One of the most important theorems in linear algebra i the Invertible Matrix Theorem , which identifies several conditions that are equivalent to a matrix being invertible.   Invertible Matrix Theorem   The following conditions are equivalent for an matrix:    is invertible.    The homogeneous system has only the trivial solution .     can be carried to the identity matrix by elementary row operations.    The system has at least one solution for every choice of column .    There exists an matrix such that .     .       If you Google the Invertible Matrix Theorem, there are a lot more equivalent conditions than what we have listed here. Some of them are just rephrasing the conditions using other terminology and some of them requires a bit more linear algebra concepts that we are building towards. We will certainly circle back to this theorem and add more conditions when we learn more!   "
},
{
  "id": "sec24-MatrixInverse-2-2",
  "level": "2",
  "url": "sec24-MatrixInverse.html#sec24-MatrixInverse-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     determine if a matrix is invertible;    find the inverse of a invertible matrix using a formula;    find the inverse of an invertible matrix using the Gaussian Elimination algorithm;    solve systems of linear equations using matrix inverses.    "
},
{
  "id": "sec24-MatrixInverse-3",
  "level": "2",
  "url": "sec24-MatrixInverse.html#sec24-MatrixInverse-3",
  "type": "Investigation",
  "number": "2.4.1",
  "title": "",
  "body": " Let . Find a matrix such that where is the identity matrix.   There are two possible strategies:   Strategy #1: Guess and check! This strategy is doable for a matrix but usually quite tedious. The matrix is made special so that it isn't too bad at all.   Strategy #2: Remember how matrix multiplication works: When we multiply by , each column of the answer is found by multiplying the corresponding column of by .  So we know that if is the first column of , then we will need to be since that is the first column of the identity matrix. If we call the entries of that column and , then we can solve a system of equations to figure out what and are!  Then we can do a similar process to figure out what the second column of is!    Using Strategy #1...  You probably discovered that the only way to get the in the top left of the answer is to put a in the bottom left of . Then you can figure out that you need a in the top left of to get the in the bottom left of the answer.  Now you need a in the top right of the answer. because of the in , your answer for this spot will be times whatever you put in the bottom right of . So that has to be a .  Finally that in the bottom right of means that you need a in your top right spot in order to get the you need in the bottom right of the identity matrix. So the matrix     Using Strategy #2...  If we call our first column of  , then we know that we need We can solve this using the substitution method easily since the top equation tells us and substituting this into the second equation gives us So the first column of will have to be .  Now if we call our second column of  , then we know that we need This one is even quicker to solve because the top equation tells us and substituting this into the second equation gives us . So the second column of will have to be .  Therefore, the matrix .  And we can quickly verify that :    Now that you found , take a minute and compute .    is also !   "
},
{
  "id": "sec24-MatrixInverse-4",
  "level": "2",
  "url": "sec24-MatrixInverse.html#sec24-MatrixInverse-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "def-inverse-matrix",
  "level": "2",
  "url": "sec24-MatrixInverse.html#def-inverse-matrix",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Inverse of a Matrix.",
  "body": " Inverse of a Matrix   If is a square matrix, a matrix is called an inverse of if and only if . A matrix that has an inverse is called an invertible matrix .   "
},
{
  "id": "subsec-InverseMatrices-3",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  An exmaple:  is invertible and since...    A non-example:  is NOT invertible because no matter what matrix you try you will get a row of zeros:   "
},
{
  "id": "thm-Uniqueness_Inverses",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-Uniqueness_Inverses",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  A matrix can only have one inverse.   "
},
{
  "id": "subsec-InverseMatrices-5",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose and are both inverses of . Then This means .  Multiplying both sides of equation (on the left) by , we get Using the associative property, we get Since we also know that , then .  So by the identity property, .  "
},
{
  "id": "def-Determinant-2x2Matrices",
  "level": "2",
  "url": "sec24-MatrixInverse.html#def-Determinant-2x2Matrices",
  "type": "Definition",
  "number": "2.4.4",
  "title": "Determinant of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices.",
  "body": " Determinant of Matrices   Let be a matrix. The determinant of the matrix is defined by    "
},
{
  "id": "def-Adjugate-2x2Matrices",
  "level": "2",
  "url": "sec24-MatrixInverse.html#def-Adjugate-2x2Matrices",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Adjugate of <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrices.",
  "body": " Adjugate of Matrices   Let be a matrix. The adjugate of the matrix is The adjugate of can be obtained by (1) swapping the elements in the main diagonal, and (2) changing the sign of the elements not on the main diagonal.   "
},
{
  "id": "subsec-InverseMatrices-10",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-10",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": " Let . Notice that Since , we know that exists.  We can also find . We know that . Then   If you want to verify that is indeed the inverse of , try multiplying them together and you should get back .  "
},
{
  "id": "thm-UniqueSolution-InvertibleMatrix",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-UniqueSolution-InvertibleMatrix",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  If is an invertible matrix, then the Matrix Equation has exactly one solution. The solution is .   "
},
{
  "id": "subsec-InverseMatrices-15",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-15",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": " Consider the following system of linear equations: The Matrix Equation version of this system is , where   Notice that So is invertible! We can find the solution using the little theorem we just came up with!  Since , then we get By our theorem, the solution to the system is   "
},
{
  "id": "subsec-InverseMatrices-16",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-16",
  "type": "Checkpoint",
  "number": "2.4.9",
  "title": "",
  "body": " Solve the following system of linear equation by   writing the system as a Matrix Equation;    finding the inverse of the coefficient matrix;    using the inverse to solve the system.      1. The matrix equation is   2. The determinant is and the adjugate matrix is , so the inverse is   3. The solution is    "
},
{
  "id": "subsec-InverseMatrices-20",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-20",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": " Let's say we want to find the inverse of the matrix . We will first make our big augmented matrix: Now we will put this thing into reduced row echelon form!  Step 1: Swap Row 1 and Row 2, we get We have our first leading and it already has a zero beneath it.  Step 2: Multiply Row 2 by , we get Now the matrix is in row echelon form. Let's get it into reduced row echelon form by getting a zero above the second leading .  Step 3: Multiply times Row 2 to Row 1 (and replace Row 1), we get Notice that the part on the left is the identity matrix. And, notice that the part on the right is the inverse!  "
},
{
  "id": "subsec-InverseMatrices-22",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-InverseMatrices-22",
  "type": "Checkpoint",
  "number": "2.4.11",
  "title": "",
  "body": " Use the Gaussian Elimination algorithm to find the inverse of the matrix    The big augmented matrix is   First let's get zeros beneath our first leading :   Now we need to get our second leading by multiplying Row 2 by :   Now we need a zero beneath our second leading . We can multiply Row 2 by and adding it to Row 3:   Now to get our last leading , we need to multiply Row 3 by :   Then we need to get zeros above this third leading . So, let's add times Row 3 to Row 2 and -3 times Row 3 to Row 1:   So the inverse is    "
},
{
  "id": "thm-CancellationLaw-Matrices",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-CancellationLaw-Matrices",
  "type": "Theorem",
  "number": "2.4.12",
  "title": "Cancellation Law for Matrices.",
  "body": " Cancellation Law for Matrices   Suppose and are matrices and is an invertible matrix. Then the following holds:   If , then .    If , then .      "
},
{
  "id": "subsec-ImportantTheorems-Inverses-3",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-ImportantTheorems-Inverses-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Part 1: Suppose . Then Therefore,   The proof of Part 2 would be similar.  "
},
{
  "id": "thm-Transpose-Inverse",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-Transpose-Inverse",
  "type": "Theorem",
  "number": "2.4.13",
  "title": "",
  "body": "  Suppose is invertible. Then the inverse of is the transpose of . That is,    "
},
{
  "id": "subsec-ImportantTheorems-Inverses-5",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-ImportantTheorems-Inverses-5",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Suppose is invertible. Then But and . Substituting these into the above equation, we get So the inverse of is the transpose of .  "
},
{
  "id": "thm-Product-Inverse",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-Product-Inverse",
  "type": "Theorem",
  "number": "2.4.14",
  "title": "",
  "body": "  If and are invertible matrices and is defined, then    "
},
{
  "id": "subsec-ImportantTheorems-Inverses-8",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-ImportantTheorems-Inverses-8",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-ImportantTheorems-Inverses-11",
  "level": "2",
  "url": "sec24-MatrixInverse.html#subsec-ImportantTheorems-Inverses-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Invertible Matrix Theorem "
},
{
  "id": "thm-InvertibleMatrixTheorem",
  "level": "2",
  "url": "sec24-MatrixInverse.html#thm-InvertibleMatrixTheorem",
  "type": "Theorem",
  "number": "2.4.15",
  "title": "Invertible Matrix Theorem.",
  "body": " Invertible Matrix Theorem   The following conditions are equivalent for an matrix:    is invertible.    The homogeneous system has only the trivial solution .     can be carried to the identity matrix by elementary row operations.    The system has at least one solution for every choice of column .    There exists an matrix such that .     .      "
},
{
  "id": "sec25-ElementaryMatrices",
  "level": "1",
  "url": "sec25-ElementaryMatrices.html",
  "type": "Section",
  "number": "2.5",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices   In previous sections, we utilized Gaussian Elimination as our primary tool for solving systems of linear equations and computing matrix inverses. Separately, we learned the mechanics of matrix multiplication. While these might seem like distinct mathematical operations, they are intimately connected. In this section, we will bridge that gap by introducing elementary matrices .    After this section, students will be able to:     define and construct elementary matrices by applying a single elementary row operation to the identity matrix;    execute elementary row operations on a given matrix via left-multiplication by an elementary matrix;    determine the inverse of an elementary matrix by reversing the corresponding row operation on the identity matrix;    express any invertible matrix, and its inverse, as a product of elementary matrices.      We've learned how to solve systems of equations and find matrix inverses by using the Gaussian Elimination algorithm. And we learned how to multiply matrices. It turns out that these two things are related!  Each of the three elementary row operations can be performed by multiplying by an elementary matrix .  Let's see this by looking at an example!   Consider the system: The augmented matrix is   Recall there are three elementary row operations we can perform to an augmented matrix.   We could swap the two rows by multiplying by the matrix :     We could multiply Row 2 by by multiplying by the matrix :     We could add times Row 1 to Row 2 (and replace Row 2) by multiplying by the matrix :    Notice that in each case, the matrix that we used to do the elementary operation is exactly the matrix you would get by doing that same elementary operation to the identity matrix. WHAT!??   If we swap the two rows of , we get     If we multiply Row 2 of by , we get     If we add times Row 1 of to Row 2 (and replace Row 2), we get        Summary: Every elementary row operation corresponds to an elementary matrix , , that can be created by performing that operation on the identity matrix. We can perform that operation on any matrix by computing the product .   Consider the matrix . Suppose we did the following two steps:   Swap Row 1 and Row 2;    Add times Row 1 to Row 2 (and replace Row 2).   That would look like this:   The first step corresponds to the elementary matrix and the second step corresponds to the elementary matrix ( Note: When we made , we started with a brand new identity matrix rather than using .)  Now notice that    The inverse of an elementary matrix , is also an elementary matrix and can be used to perform the inverse of the elementary operation (the operation that would undo the original row operation).   If corresponds to adding times Row 1 to Row 3, then the elementary matrix is Then and this corresponds to adding times Row 1 to Row 3.   Here is the claim: A matrix is invertible if and only if it is the product of elementary matrices .  Let's think about our method for finding inverses using Gaussian Elimination algorithm. We create a big augmented matrix and then do elementary operations until we get to .  Now we know that we could do this by multiplying the augmented matrix by the corresponding elementary matrices. Let's call those elementary matrices . Then if we just look at the right side of the big augmented matrix, we would see that Take the inverse of both sides, and we get   We can use what we just learned to describe a process that will always work to write any invertible matrix as a product of elementary matrices:   Put the matrix into reduced row echelon form. If it is invertible, then this form will be the identity matrix.    For each step, write down the corresponding elementary matrix (writing them from right to left). Remember that each time we need to start with a brand new identity matrix to make our elementary matrix!  If you multiply the elementary matrices, you will get the inverse of the original matrix.    Take the inverse of each of the elementary matrices and then write them down in the reverse order. Then we are done!      Consider this matrix and we want to find .  First, let's multiply the top row by to get our leading : This first step corresponds to the elementary matrix   Second, let's add times Row 1 to Row 2 (and replace Row 2) to get a zero below the first leading : This second step corresponds to the elementary matrix   Third, let's multiply the second row by to get our second leading : This third step corresponds to the elementary matrix   Fourth, let's add times Row 2 to Row 1 (and replace Row 1) to put the matrix into reduced row echelon form: This fourth step corresponds to the elementary matrix   So   We can write all of the inverses of the elementary matrices by using the reverse operation on the identity matrix:   The inverse of is .    The inverse of is .    The inverse of is .    The inverse of is .   So     Write the following matrix AND its inverse as a product of elementary matrices.    Step 1: Swap Row 1 and Row 2 to get This corresponds to the elementary matrix   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get This corresponds to the elementary matrix   Step 3: Multiply Row 2 by to get This corresponds to the elementary matrix   Step 4: Multiply Row 3 by to get This corresponds to the elementary matrix   Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 6: Add times Row 3 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 7: Add times Row 3 to Row 2 (and replace Row 2) to get This corresponds to the elementary matrix   This tells us that If we multiply those out we see that   And taking the inverse of both sides of the giant product (and using the \"shoes and socks\" rule), we see that So let's find the inverses of each of these matrices by performing the inverse operation on the identity matrix:    swaps Row 1 and Row 2 and that operation is its own inverse (do it twice and you get right back where you started), so .     adds Row 1 to Row 3, and the inverse of that is adding times Row 1 to Row 2, so .     multiplies Row 2 by , and the inverse of that is multiplying Row 2 by , so .     multiplies Row 3 by , and that operation is its own inverse, so .     adds times Row 2 to Row 1, and the inverse of that is adding times Row 2 to Row 1, so .     adds times Row 3 to Row 1, and the inverse of that is adding times Row 3 to Row 1, so .     adds times Row 3 to Row 2, and the inverse of that is adding times Row 3 to Row 2, so .   This means...     "
},
{
  "id": "sec25-ElementaryMatrices-2-1",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrices "
},
{
  "id": "sec25-ElementaryMatrices-2-2",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     define and construct elementary matrices by applying a single elementary row operation to the identity matrix;    execute elementary row operations on a given matrix via left-multiplication by an elementary matrix;    determine the inverse of an elementary matrix by reversing the corresponding row operation on the identity matrix;    express any invertible matrix, and its inverse, as a product of elementary matrices.    "
},
{
  "id": "sec25-ElementaryMatrices-4",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "sec25-ElementaryMatrices-6",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-6",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": " Consider the system: The augmented matrix is   Recall there are three elementary row operations we can perform to an augmented matrix.   We could swap the two rows by multiplying by the matrix :     We could multiply Row 2 by by multiplying by the matrix :     We could add times Row 1 to Row 2 (and replace Row 2) by multiplying by the matrix :    Notice that in each case, the matrix that we used to do the elementary operation is exactly the matrix you would get by doing that same elementary operation to the identity matrix. WHAT!??   If we swap the two rows of , we get     If we multiply Row 2 of by , we get     If we add times Row 1 of to Row 2 (and replace Row 2), we get      "
},
{
  "id": "sec25-ElementaryMatrices-7",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "sec25-ElementaryMatrices-8",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-8",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": " Consider the matrix . Suppose we did the following two steps:   Swap Row 1 and Row 2;    Add times Row 1 to Row 2 (and replace Row 2).   That would look like this:   The first step corresponds to the elementary matrix and the second step corresponds to the elementary matrix ( Note: When we made , we started with a brand new identity matrix rather than using .)  Now notice that   "
},
{
  "id": "sec25-ElementaryMatrices-10",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-10",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": " If corresponds to adding times Row 1 to Row 3, then the elementary matrix is Then and this corresponds to adding times Row 1 to Row 3.  "
},
{
  "id": "sec25-ElementaryMatrices-15",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-15",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": " Consider this matrix and we want to find .  First, let's multiply the top row by to get our leading : This first step corresponds to the elementary matrix   Second, let's add times Row 1 to Row 2 (and replace Row 2) to get a zero below the first leading : This second step corresponds to the elementary matrix   Third, let's multiply the second row by to get our second leading : This third step corresponds to the elementary matrix   Fourth, let's add times Row 2 to Row 1 (and replace Row 1) to put the matrix into reduced row echelon form: This fourth step corresponds to the elementary matrix   So   We can write all of the inverses of the elementary matrices by using the reverse operation on the identity matrix:   The inverse of is .    The inverse of is .    The inverse of is .    The inverse of is .   So   "
},
{
  "id": "sec25-ElementaryMatrices-16",
  "level": "2",
  "url": "sec25-ElementaryMatrices.html#sec25-ElementaryMatrices-16",
  "type": "Checkpoint",
  "number": "2.5.5",
  "title": "",
  "body": " Write the following matrix AND its inverse as a product of elementary matrices.    Step 1: Swap Row 1 and Row 2 to get This corresponds to the elementary matrix   Step 2: Add times Row 1 to Row 3 (and replace Row 3) to get This corresponds to the elementary matrix   Step 3: Multiply Row 2 by to get This corresponds to the elementary matrix   Step 4: Multiply Row 3 by to get This corresponds to the elementary matrix   Step 5: Add times Row 2 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 6: Add times Row 3 to Row 1 (and replace Row 1) to get This corresponds to the elementary matrix   Step 7: Add times Row 3 to Row 2 (and replace Row 2) to get This corresponds to the elementary matrix   This tells us that If we multiply those out we see that   And taking the inverse of both sides of the giant product (and using the \"shoes and socks\" rule), we see that So let's find the inverses of each of these matrices by performing the inverse operation on the identity matrix:    swaps Row 1 and Row 2 and that operation is its own inverse (do it twice and you get right back where you started), so .     adds Row 1 to Row 3, and the inverse of that is adding times Row 1 to Row 2, so .     multiplies Row 2 by , and the inverse of that is multiplying Row 2 by , so .     multiplies Row 3 by , and that operation is its own inverse, so .     adds times Row 2 to Row 1, and the inverse of that is adding times Row 2 to Row 1, so .     adds times Row 3 to Row 1, and the inverse of that is adding times Row 3 to Row 1, so .     adds times Row 3 to Row 2, and the inverse of that is adding times Row 3 to Row 2, so .   This means...    "
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
