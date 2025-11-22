# `pageShieldPolicy` Submodule <a name="`pageShieldPolicy` Submodule" id="@cdktf/provider-cloudflare.pageShieldPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PageShieldPolicy <a name="PageShieldPolicy" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy cloudflare_page_shield_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  description: str,
  enabled: bool | IResolvable,
  expression: str,
  value: str,
  zone_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.action">action</a></code> | <code>str</code> | The action to take if the expression matches Available values: "allow", "log". |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the policy. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.expression">expression</a></code> | <code>str</code> | The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.value">value</a></code> | <code>str</code> | The policy which will be applied. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.action"></a>

- *Type:* str

The action to take if the expression matches Available values: "allow", "log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#action PageShieldPolicy#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.description"></a>

- *Type:* str

A description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#description PageShieldPolicy#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#enabled PageShieldPolicy#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.expression"></a>

- *Type:* str

The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#expression PageShieldPolicy#expression}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.value"></a>

- *Type:* str

The policy which will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#value PageShieldPolicy#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#zone_id PageShieldPolicy#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PageShieldPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PageShieldPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PageShieldPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PageShieldPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PageShieldPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PageShieldPolicyConfig <a name="PageShieldPolicyConfig" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import page_shield_policy

pageShieldPolicy.PageShieldPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  description: str,
  enabled: bool | IResolvable,
  expression: str,
  value: str,
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.action">action</a></code> | <code>str</code> | The action to take if the expression matches Available values: "allow", "log". |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.description">description</a></code> | <code>str</code> | A description for the policy. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.expression">expression</a></code> | <code>str</code> | The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.value">value</a></code> | <code>str</code> | The policy which will be applied. |
| <code><a href="#@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action to take if the expression matches Available values: "allow", "log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#action PageShieldPolicy#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#description PageShieldPolicy#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#enabled PageShieldPolicy#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#expression PageShieldPolicy#expression}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The policy which will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#value PageShieldPolicy#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.pageShieldPolicy.PageShieldPolicyConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/page_shield_policy#zone_id PageShieldPolicy#zone_id}

---



