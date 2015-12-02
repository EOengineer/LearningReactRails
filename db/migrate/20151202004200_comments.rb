class Comments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :blog_id, null: false

      t.timestamps null: false
    end
  end
end
