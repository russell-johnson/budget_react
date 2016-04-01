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

  def destroy
     if Bill.find(params[:id]).destroy
      render json: { id: params[:id].to_i }
     else
      render json: { errors: 'board cannot be deleted'}
    end

  end


  private
    def bill_params
      params.require(:bill).permit(:name, :amount)
    end

end
