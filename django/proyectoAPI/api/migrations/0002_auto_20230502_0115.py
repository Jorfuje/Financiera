# Generated by Django 3.2.4 on 2023-05-02 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prestamo',
            name='monto',
            field=models.FloatField(default=10),
        ),
        migrations.AlterField(
            model_name='prestamo',
            name='pagos',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='prestamo',
            name='status',
            field=models.CharField(max_length=15),
        ),
    ]
