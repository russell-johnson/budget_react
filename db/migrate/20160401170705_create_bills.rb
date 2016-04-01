class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.float :amount

      t.timestamps null: false
    end
  end
end
