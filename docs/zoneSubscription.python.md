# `zoneSubscription` Submodule <a name="`zoneSubscription` Submodule" id="@cdktf/provider-cloudflare.zoneSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSubscription <a name="ZoneSubscription" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription cloudflare_zone_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  frequency: str = None,
  rate_plan: ZoneSubscriptionRatePlan = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.zoneId"></a>

- *Type:* str

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.frequency"></a>

- *Type:* str

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `rate_plan`<sup>Optional</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.ratePlan"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan">put_rate_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan">reset_rate_plan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rate_plan` <a name="put_rate_plan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan"></a>

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

###### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.currency"></a>

- *Type:* str

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}

---

###### `externally_managed`<sup>Optional</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.externallyManaged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.id"></a>

- *Type:* str

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#id ZoneSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `is_contract`<sup>Optional</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.isContract"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}

---

###### `public_name`<sup>Optional</sup> <a name="public_name" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.publicName"></a>

- *Type:* str

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.scope"></a>

- *Type:* str

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}

---

###### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.sets"></a>

- *Type:* typing.List[str]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}

---

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_rate_plan` <a name="reset_rate_plan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan"></a>

```python
def reset_rate_plan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZoneSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZoneSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd">current_period_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart">current_period_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price">price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput">rate_plan_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `current_period_end`<sup>Required</sup> <a name="current_period_end" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd"></a>

```python
current_period_end: str
```

- *Type:* str

---

##### `current_period_start`<sup>Required</sup> <a name="current_period_start" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart"></a>

```python
current_period_start: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price"></a>

```python
price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_plan`<sup>Required</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan"></a>

```python
rate_plan: ZoneSubscriptionRatePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `rate_plan_input`<sup>Optional</sup> <a name="rate_plan_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput"></a>

```python
rate_plan_input: typing.Union[IResolvable, ZoneSubscriptionRatePlan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSubscriptionConfig <a name="ZoneSubscriptionConfig" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  frequency: str = None,
  rate_plan: ZoneSubscriptionRatePlan = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency">frequency</a></code> | <code>str</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan">rate_plan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `rate_plan`<sup>Optional</sup> <a name="rate_plan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan"></a>

```python
rate_plan: ZoneSubscriptionRatePlan
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

### ZoneSubscriptionRatePlan <a name="ZoneSubscriptionRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscriptionRatePlan(
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
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency">currency</a></code> | <code>str</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged">externally_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id">id</a></code> | <code>str</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract">is_contract</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName">public_name</a></code> | <code>str</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope">scope</a></code> | <code>str</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets">sets</a></code> | <code>typing.List[str]</code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency"></a>

```python
currency: str
```

- *Type:* str

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}

---

##### `externally_managed`<sup>Optional</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged"></a>

```python
externally_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#id ZoneSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_contract`<sup>Optional</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract"></a>

```python
is_contract: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}

---

##### `public_name`<sup>Optional</sup> <a name="public_name" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName"></a>

```python
public_name: str
```

- *Type:* str

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets"></a>

```python
sets: typing.List[str]
```

- *Type:* typing.List[str]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSubscriptionRatePlanOutputReference <a name="ZoneSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_subscription

zoneSubscription.ZoneSubscriptionRatePlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency">reset_currency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged">reset_externally_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract">reset_is_contract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName">reset_public_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets">reset_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_currency` <a name="reset_currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency"></a>

```python
def reset_currency() -> None
```

##### `reset_externally_managed` <a name="reset_externally_managed" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```python
def reset_externally_managed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_contract` <a name="reset_is_contract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract"></a>

```python
def reset_is_contract() -> None
```

##### `reset_public_name` <a name="reset_public_name" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName"></a>

```python
def reset_public_name() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_sets` <a name="reset_sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets"></a>

```python
def reset_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput">currency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput">externally_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput">is_contract_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput">public_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput">sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged">externally_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract">is_contract</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName">public_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_input`<sup>Optional</sup> <a name="currency_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```python
currency_input: str
```

- *Type:* str

---

##### `externally_managed_input`<sup>Optional</sup> <a name="externally_managed_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```python
externally_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_contract_input`<sup>Optional</sup> <a name="is_contract_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```python
is_contract_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_name_input`<sup>Optional</sup> <a name="public_name_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```python
public_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `sets_input`<sup>Optional</sup> <a name="sets_input" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput"></a>

```python
sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `externally_managed`<sup>Required</sup> <a name="externally_managed" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```python
externally_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_contract`<sup>Required</sup> <a name="is_contract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract"></a>

```python
is_contract: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_name`<sup>Required</sup> <a name="public_name" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName"></a>

```python
public_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets"></a>

```python
sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZoneSubscriptionRatePlan]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>]

---



