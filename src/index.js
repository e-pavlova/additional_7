let initMatrix;

function solveSudoku(matrix)
{
    initMatrix = matrix;

    valueIsFound(0, 0);

    return initMatrix;
}

function valueIsFound(indexOfrow, indexOfcolumn)
{
    if (indexOfrow > 8 || indexOfcolumn > 8)
    {
        return true;
    }
    else if (initMatrix[indexOfrow][indexOfcolumn] !== 0)
    {
        indexOfcolumn += 1;

        if (indexOfcolumn > 8)
        {
            indexOfrow += 1;
            indexOfcolumn = 0;
        }

        return valueIsFound(indexOfrow, indexOfcolumn);
    }

    for (let valueFromRange1_9 = 1; valueFromRange1_9 <= 9; valueFromRange1_9 ++)
    {
        if (isValueFits(valueFromRange1_9, indexOfrow, indexOfcolumn))
        {
            initMatrix[indexOfrow][indexOfcolumn] = valueFromRange1_9;

            let indexOfnextCol = indexOfcolumn;
            let indexOfnextRow = indexOfrow;
            indexOfnextCol += 1;

            if (indexOfnextCol > 8)
            {
                indexOfnextRow += 1;
                indexOfnextCol = 0;
            }

            if (valueIsFound(indexOfnextRow, indexOfnextCol))
            {
                return true;
            }
        }
    }

    initMatrix[indexOfrow][indexOfcolumn] = 0;
    return false;
}

function isValueFits(valueOfCell, valueRowIndex, valueColumnIndex)
{
    for (let i = 0; i < 9; i ++)
    {
        let smallMatrixI = (Math.floor(valueRowIndex / 3) * 3) + Math.floor(i / 3);
        let smallMatrixJ = (Math.floor(valueColumnIndex / 3) * 3) + (i % 3);

        if (valueOfCell === initMatrix[smallMatrixI][smallMatrixJ])
        {
            return false;
        }
    }
    for (let i = 0; i < 9; i ++)
    {
        if (valueOfCell === initMatrix[i][valueColumnIndex])
        {
            return false;
        }
    }
    for (let i = 0; i < 9; i ++)
    {
        if (valueOfCell === initMatrix[valueRowIndex][i])
        {
            return false;
        }
    }

    return true;
}

module.exports = solveSudoku;