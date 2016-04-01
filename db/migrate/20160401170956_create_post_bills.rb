class CreatePostBills < ActiveRecord::Migration
  def change
    create_table :post_bills do |t|

      t.timestamps null: false
    end
  end
end
