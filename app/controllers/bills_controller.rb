class BillsController < ApplicationController
  def index
    @bills = Bill.all
  end

  def create
    bill = Bill.new(bill_params)
    if bill.save
      render json: bill
    else
      render json: {errors: bill.errors_full_messages}
    end
  end

  private
    def bill_params
      params.require(:bill).permit(:name, :amount)
    end

end
