class CreateFunds < ActiveRecord::Migration
  def change
    create_table :funds do |t|
      t.float :user_amount
      t.float :total

      t.timestamps null: false
    end
  end
end
