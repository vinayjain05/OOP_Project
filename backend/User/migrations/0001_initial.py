# Generated by Django 3.2.5 on 2021-07-17 16:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userName', models.CharField(max_length=20, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('mobile', models.CharField(max_length=10)),
                ('userRole', models.CharField(default='Patient', max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('users_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='User.users')),
                ('specialization', models.CharField(max_length=100)),
                ('experience', models.CharField(max_length=100)),
                ('degree', models.CharField(max_length=100)),
                ('hospitalName', models.CharField(max_length=100)),
                ('hospitalLocation', models.TextField()),
            ],
            bases=('User.users', models.Model),
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('users_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='User.users')),
                ('age', models.PositiveSmallIntegerField()),
                ('gender', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('medicalHistory', models.TextField()),
            ],
            bases=('User.users', models.Model),
        ),
        migrations.CreateModel(
            name='BookedSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slot', models.IntegerField(default=-1)),
                ('type', models.BooleanField(default=True)),
                ('doc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.doctor')),
                ('pat', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='User.patient')),
            ],
        ),
    ]
