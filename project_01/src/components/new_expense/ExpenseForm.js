import React from 'react'
import Button from '../UI/Button'
import Form, { FormItem } from '../UI/Form'
import { Input, InputDate, InputNumber } from '../UI/Input'

const ExpenseForm = () => {
  return (
    <Form>
      <div className="new-expense__controls">
        <FormItem label={"Title"}>
          <Input />
        </FormItem>
        <FormItem label={"Amount"}>
          <InputNumber min={"0.01"} step={"0.01"} />
        </FormItem>
        <FormItem label={"Date"}>
          <InputDate minDate={"2019-01-01"} step={"2022-12-31"} />
        </FormItem>
      </div>
      <div className='new-expense__actions'>
        <Button label="Add Expense" submit/>
      </div>
    </Form>
  )
}

export default ExpenseForm