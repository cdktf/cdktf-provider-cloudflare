# `cloudConnectorRules` Submodule <a name="`cloudConnectorRules` Submodule" id="@cdktf/provider-cloudflare.cloudConnectorRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConnectorRules <a name="CloudConnectorRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRules(
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
  rules: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]</code> | rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#zone_id CloudConnectorRules#zone_id}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#rules CloudConnectorRules#rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetRules">reset_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]

---

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetRules"></a>

```python
def reset_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudConnectorRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudConnectorRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudConnectorRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList">CloudConnectorRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rules"></a>

```python
rules: CloudConnectorRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList">CloudConnectorRulesRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConnectorRulesConfig <a name="CloudConnectorRulesConfig" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  rules: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]</code> | rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#zone_id CloudConnectorRules#zone_id}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#rules CloudConnectorRules#rules}

---

### CloudConnectorRulesRules <a name="CloudConnectorRulesRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesRules(
  expression: str,
  parameters: CloudConnectorRulesRulesParameters,
  provider: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.expression">expression</a></code> | <code>str</code> | Criteria for an HTTP request to trigger the cloud connector rule. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.provider">provider</a></code> | <code>str</code> | Type of provider. Available values: `aws_s3`, `cloudflare_r2`, `azure_storage`, `gcp_storage`. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.description">description</a></code> | <code>str</code> | Brief summary of the cloud connector rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the headers rule is active. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

Criteria for an HTTP request to trigger the cloud connector rule.

Uses the Firewall Rules expression language based on Wireshark display filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#expression CloudConnectorRules#expression}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.parameters"></a>

```python
parameters: CloudConnectorRulesRulesParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#parameters CloudConnectorRules#parameters}

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.provider"></a>

```python
provider: str
```

- *Type:* str

Type of provider. Available values: `aws_s3`, `cloudflare_r2`, `azure_storage`, `gcp_storage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#provider CloudConnectorRules#provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.description"></a>

```python
description: str
```

- *Type:* str

Brief summary of the cloud connector rule and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#description CloudConnectorRules#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the headers rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#enabled CloudConnectorRules#enabled}

---

### CloudConnectorRulesRulesParameters <a name="CloudConnectorRulesRulesParameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesRulesParameters(
  host: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.property.host">host</a></code> | <code>str</code> | Host parameter for cloud connector rule. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.property.host"></a>

```python
host: str
```

- *Type:* str

Host parameter for cloud connector rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#host CloudConnectorRules#host}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConnectorRulesRulesList <a name="CloudConnectorRulesRulesList" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudConnectorRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudConnectorRulesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]]

---


### CloudConnectorRulesRulesOutputReference <a name="CloudConnectorRulesRulesOutputReference" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters"></a>

```python
def put_parameters(
  host: str
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters.parameter.host"></a>

- *Type:* str

Host parameter for cloud connector rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#host CloudConnectorRules#host}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference">CloudConnectorRulesRulesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parameters"></a>

```python
parameters: CloudConnectorRulesRulesParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference">CloudConnectorRulesRulesParametersOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, CloudConnectorRulesRulesParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>]

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudConnectorRulesRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules">CloudConnectorRulesRules</a>]

---


### CloudConnectorRulesRulesParametersOutputReference <a name="CloudConnectorRulesRulesParametersOutputReference" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloud_connector_rules

cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudConnectorRulesRulesParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>]

---



