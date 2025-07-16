# `accountSubscription` Submodule <a name="`accountSubscription` Submodule" id="@cdktf/provider-cloudflare.accountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSubscription <a name="AccountSubscription" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription cloudflare_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  frequency: str = None,
  rate_plan: AccountSubscriptionRatePlan = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#account_id AccountSubscription#account_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.frequency"></a>

- *Type:* str

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#frequency AccountSubscription#frequency}

---

##### `rate_plan`<sup>Optional</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.ratePlan"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan">put_rate_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan">reset_rate_plan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rate_plan` <a name="put_rate_plan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan"></a>

```python
def put_rate_plan(
  currency: str = None,
  externally_managed: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_contract: typing.Union[bool, IResolvable] = None,
  public_name: str = None,
  scope: str = None,
  sets: typing.List[str] = None
) -> None
```

###### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.currency"></a>

- *Type:* str

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#currency AccountSubscription#currency}

---

###### `externally_managed`<sup>Optional</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.externallyManaged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#externally_managed AccountSubscription#externally_managed}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.id"></a>

- *Type:* str

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#id AccountSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `is_contract`<sup>Optional</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.isContract"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#is_contract AccountSubscription#is_contract}

---

###### `public_name`<sup>Optional</sup> <a name="public_name" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.publicName"></a>

- *Type:* str

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#public_name AccountSubscription#public_name}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.scope"></a>

- *Type:* str

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#scope AccountSubscription#scope}

---

###### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.sets"></a>

- *Type:* typing.List[str]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#sets AccountSubscription#sets}

---

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_rate_plan` <a name="reset_rate_plan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan"></a>

```python
def reset_rate_plan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscription.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd">current_period_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart">current_period_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price">price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput">rate_plan_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `current_period_end`<sup>Required</sup> <a name="current_period_end" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd"></a>

```python
current_period_end: str
```

- *Type:* str

---

##### `current_period_start`<sup>Required</sup> <a name="current_period_start" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart"></a>

```python
current_period_start: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price"></a>

```python
price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_plan`<sup>Required</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan"></a>

```python
rate_plan: AccountSubscriptionRatePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `rate_plan_input`<sup>Optional</sup> <a name="rate_plan_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput"></a>

```python
rate_plan_input: typing.Union[IResolvable, AccountSubscriptionRatePlan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSubscriptionConfig <a name="AccountSubscriptionConfig" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  frequency: str = None,
  rate_plan: AccountSubscriptionRatePlan = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency">frequency</a></code> | <code>str</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#account_id AccountSubscription#account_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#frequency AccountSubscription#frequency}

---

##### `rate_plan`<sup>Optional</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan"></a>

```python
rate_plan: AccountSubscriptionRatePlan
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}

---

### AccountSubscriptionRatePlan <a name="AccountSubscriptionRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscriptionRatePlan(
  currency: str = None,
  externally_managed: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_contract: typing.Union[bool, IResolvable] = None,
  public_name: str = None,
  scope: str = None,
  sets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency">currency</a></code> | <code>str</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged">externally_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id">id</a></code> | <code>str</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract">is_contract</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName">public_name</a></code> | <code>str</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope">scope</a></code> | <code>str</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets">sets</a></code> | <code>typing.List[str]</code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency"></a>

```python
currency: str
```

- *Type:* str

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#currency AccountSubscription#currency}

---

##### `externally_managed`<sup>Optional</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged"></a>

```python
externally_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#externally_managed AccountSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#id AccountSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_contract`<sup>Optional</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract"></a>

```python
is_contract: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#is_contract AccountSubscription#is_contract}

---

##### `public_name`<sup>Optional</sup> <a name="public_name" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName"></a>

```python
public_name: str
```

- *Type:* str

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#public_name AccountSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#scope AccountSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets"></a>

```python
sets: typing.List[str]
```

- *Type:* typing.List[str]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/account_subscription#sets AccountSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSubscriptionRatePlanOutputReference <a name="AccountSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_subscription

accountSubscription.AccountSubscriptionRatePlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency">reset_currency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged">reset_externally_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract">reset_is_contract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName">reset_public_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets">reset_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_currency` <a name="reset_currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency"></a>

```python
def reset_currency() -> None
```

##### `reset_externally_managed` <a name="reset_externally_managed" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```python
def reset_externally_managed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_contract` <a name="reset_is_contract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract"></a>

```python
def reset_is_contract() -> None
```

##### `reset_public_name` <a name="reset_public_name" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName"></a>

```python
def reset_public_name() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_sets` <a name="reset_sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets"></a>

```python
def reset_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput">currency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput">externally_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput">is_contract_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput">public_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput">sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged">externally_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract">is_contract</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName">public_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_input`<sup>Optional</sup> <a name="currency_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```python
currency_input: str
```

- *Type:* str

---

##### `externally_managed_input`<sup>Optional</sup> <a name="externally_managed_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```python
externally_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_contract_input`<sup>Optional</sup> <a name="is_contract_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```python
is_contract_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_name_input`<sup>Optional</sup> <a name="public_name_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```python
public_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `sets_input`<sup>Optional</sup> <a name="sets_input" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput"></a>

```python
sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `externally_managed`<sup>Required</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```python
externally_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_contract`<sup>Required</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract"></a>

```python
is_contract: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_name`<sup>Required</sup> <a name="public_name" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName"></a>

```python
public_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets"></a>

```python
sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountSubscriptionRatePlan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>]

---



