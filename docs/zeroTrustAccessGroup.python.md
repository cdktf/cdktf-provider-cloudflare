# `zeroTrustAccessGroup` Submodule <a name="`zeroTrustAccessGroup` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessGroup <a name="ZeroTrustAccessGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  include: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]],
  name: str,
  account_id: str = None,
  exclude: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]] = None,
  id: str = None,
  require: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.include">include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.exclude">exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.require">require</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.include"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.exclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.require"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude">put_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude">put_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire">put_require</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire">reset_require</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude` <a name="put_exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude"></a>

```python
def put_exclude(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]

---

##### `put_include` <a name="put_include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude"></a>

```python
def put_include(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]

---

##### `put_require` <a name="put_require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire"></a>

```python
def put_require(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_require` <a name="reset_require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire"></a>

```python
def reset_require() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustAccessGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require">require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput">exclude_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput">include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput">require_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude"></a>

```python
exclude: ZeroTrustAccessGroupExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include"></a>

```python
include: ZeroTrustAccessGroupIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a>

---

##### `require`<sup>Required</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require"></a>

```python
require: ZeroTrustAccessGroupRequireList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput"></a>

```python
exclude_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput"></a>

```python
include_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `require_input`<sup>Optional</sup> <a name="require_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput"></a>

```python
require_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessGroupConfig <a name="ZeroTrustAccessGroupConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  include: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]],
  name: str,
  account_id: str = None,
  exclude: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]] = None,
  id: str = None,
  require: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include">include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude">exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require">require</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include"></a>

```python
include: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude"></a>

```python
exclude: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require"></a>

```python
require: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

### ZeroTrustAccessGroupExclude <a name="ZeroTrustAccessGroupExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExclude(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAuthContext]] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  common_names: typing.List[str] = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  email_list: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeExternalEvaluation]] = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext">auth_context</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation">external_evaluation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip">ip</a></code> | <code>typing.List[str]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | The ID of an existing IP list to reference. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}.

---

##### `auth_context`<sup>Optional</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext"></a>

```python
auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}.

---

##### `common_names`<sup>Optional</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}.

---

##### `email_list`<sup>Optional</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation"></a>

```python
external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

The ID of an existing IP list to reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}.

---

### ZeroTrustAccessGroupExcludeAuthContext <a name="ZeroTrustAccessGroupExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext(
  ac_id: str,
  id: str,
  identity_provider_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId">ac_id</a></code> | <code>str</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id">id</a></code> | <code>str</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeAzure <a name="ZeroTrustAccessGroupExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeExternalEvaluation <a name="ZeroTrustAccessGroupExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}.

---

### ZeroTrustAccessGroupExcludeGithub <a name="ZeroTrustAccessGroupExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}.

---

### ZeroTrustAccessGroupExcludeGsuite <a name="ZeroTrustAccessGroupExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

### ZeroTrustAccessGroupExcludeOkta <a name="ZeroTrustAccessGroupExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

### ZeroTrustAccessGroupExcludeSaml <a name="ZeroTrustAccessGroupExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

### ZeroTrustAccessGroupInclude <a name="ZeroTrustAccessGroupInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupInclude(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAuthContext]] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  common_names: typing.List[str] = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  email_list: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeExternalEvaluation]] = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext">auth_context</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation">external_evaluation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip">ip</a></code> | <code>typing.List[str]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | The ID of an existing IP list to reference. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}.

---

##### `auth_context`<sup>Optional</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext"></a>

```python
auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}.

---

##### `common_names`<sup>Optional</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}.

---

##### `email_list`<sup>Optional</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation"></a>

```python
external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

The ID of an existing IP list to reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}.

---

### ZeroTrustAccessGroupIncludeAuthContext <a name="ZeroTrustAccessGroupIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext(
  ac_id: str,
  id: str,
  identity_provider_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId">ac_id</a></code> | <code>str</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id">id</a></code> | <code>str</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeAzure <a name="ZeroTrustAccessGroupIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeExternalEvaluation <a name="ZeroTrustAccessGroupIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}.

---

### ZeroTrustAccessGroupIncludeGithub <a name="ZeroTrustAccessGroupIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}.

---

### ZeroTrustAccessGroupIncludeGsuite <a name="ZeroTrustAccessGroupIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

### ZeroTrustAccessGroupIncludeOkta <a name="ZeroTrustAccessGroupIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

### ZeroTrustAccessGroupIncludeSaml <a name="ZeroTrustAccessGroupIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

### ZeroTrustAccessGroupRequire <a name="ZeroTrustAccessGroupRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequire(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAuthContext]] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  common_names: typing.List[str] = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  email_list: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireExternalEvaluation]] = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext">auth_context</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation">external_evaluation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip">ip</a></code> | <code>typing.List[str]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | The ID of an existing IP list to reference. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}.

---

##### `auth_context`<sup>Optional</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext"></a>

```python
auth_context: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}.

---

##### `common_names`<sup>Optional</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}.

---

##### `email_list`<sup>Optional</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation"></a>

```python
external_evaluation: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

The ID of an existing IP list to reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}.

---

### ZeroTrustAccessGroupRequireAuthContext <a name="ZeroTrustAccessGroupRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext(
  ac_id: str,
  id: str,
  identity_provider_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId">ac_id</a></code> | <code>str</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id">id</a></code> | <code>str</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireAzure <a name="ZeroTrustAccessGroupRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireExternalEvaluation <a name="ZeroTrustAccessGroupRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}.

---

### ZeroTrustAccessGroupRequireGithub <a name="ZeroTrustAccessGroupRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}.

---

### ZeroTrustAccessGroupRequireGsuite <a name="ZeroTrustAccessGroupRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

### ZeroTrustAccessGroupRequireOkta <a name="ZeroTrustAccessGroupRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

### ZeroTrustAccessGroupRequireSaml <a name="ZeroTrustAccessGroupRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessGroupExcludeAuthContextList <a name="ZeroTrustAccessGroupExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]

---


### ZeroTrustAccessGroupExcludeAuthContextOutputReference <a name="ZeroTrustAccessGroupExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput">ac_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId">ac_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ac_id_input`<sup>Optional</sup> <a name="ac_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput"></a>

```python
ac_id_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeAuthContext]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]

---


### ZeroTrustAccessGroupExcludeAzureList <a name="ZeroTrustAccessGroupExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]

---


### ZeroTrustAccessGroupExcludeAzureOutputReference <a name="ZeroTrustAccessGroupExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]

---


### ZeroTrustAccessGroupExcludeExternalEvaluationList <a name="ZeroTrustAccessGroupExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]

---


### ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeExternalEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]

---


### ZeroTrustAccessGroupExcludeGithubList <a name="ZeroTrustAccessGroupExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]

---


### ZeroTrustAccessGroupExcludeGithubOutputReference <a name="ZeroTrustAccessGroupExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]

---


### ZeroTrustAccessGroupExcludeGsuiteList <a name="ZeroTrustAccessGroupExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]

---


### ZeroTrustAccessGroupExcludeGsuiteOutputReference <a name="ZeroTrustAccessGroupExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]

---


### ZeroTrustAccessGroupExcludeList <a name="ZeroTrustAccessGroupExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]]

---


### ZeroTrustAccessGroupExcludeOktaList <a name="ZeroTrustAccessGroupExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]

---


### ZeroTrustAccessGroupExcludeOktaOutputReference <a name="ZeroTrustAccessGroupExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]

---


### ZeroTrustAccessGroupExcludeOutputReference <a name="ZeroTrustAccessGroupExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext">put_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext">reset_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames">reset_common_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList">reset_email_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_context` <a name="put_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext"></a>

```python
def put_auth_context(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAuthContext]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeExternalEvaluation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_context` <a name="reset_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext"></a>

```python
def reset_auth_context() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_common_names` <a name="reset_common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames"></a>

```python
def reset_common_names() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_email_list` <a name="reset_email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList"></a>

```python
def reset_email_list() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext">auth_context</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput">auth_context_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput">common_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput">email_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_context`<sup>Required</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext"></a>

```python
auth_context: ZeroTrustAccessGroupExcludeAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure"></a>

```python
azure: ZeroTrustAccessGroupExcludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: ZeroTrustAccessGroupExcludeExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github"></a>

```python
github: ZeroTrustAccessGroupExcludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite"></a>

```python
gsuite: ZeroTrustAccessGroupExcludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta"></a>

```python
okta: ZeroTrustAccessGroupExcludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml"></a>

```python
saml: ZeroTrustAccessGroupExcludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_context_input`<sup>Optional</sup> <a name="auth_context_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput"></a>

```python
auth_context_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>]]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `common_names_input`<sup>Optional</sup> <a name="common_names_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput"></a>

```python
common_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list_input`<sup>Optional</sup> <a name="email_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput"></a>

```python
email_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>]]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `common_names`<sup>Required</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list`<sup>Required</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>]

---


### ZeroTrustAccessGroupExcludeSamlList <a name="ZeroTrustAccessGroupExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupExcludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]]

---


### ZeroTrustAccessGroupExcludeSamlOutputReference <a name="ZeroTrustAccessGroupExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupExcludeSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>]

---


### ZeroTrustAccessGroupIncludeAuthContextList <a name="ZeroTrustAccessGroupIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]

---


### ZeroTrustAccessGroupIncludeAuthContextOutputReference <a name="ZeroTrustAccessGroupIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput">ac_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId">ac_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ac_id_input`<sup>Optional</sup> <a name="ac_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput"></a>

```python
ac_id_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeAuthContext]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]

---


### ZeroTrustAccessGroupIncludeAzureList <a name="ZeroTrustAccessGroupIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]

---


### ZeroTrustAccessGroupIncludeAzureOutputReference <a name="ZeroTrustAccessGroupIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]

---


### ZeroTrustAccessGroupIncludeExternalEvaluationList <a name="ZeroTrustAccessGroupIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]

---


### ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeExternalEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]

---


### ZeroTrustAccessGroupIncludeGithubList <a name="ZeroTrustAccessGroupIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]

---


### ZeroTrustAccessGroupIncludeGithubOutputReference <a name="ZeroTrustAccessGroupIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]

---


### ZeroTrustAccessGroupIncludeGsuiteList <a name="ZeroTrustAccessGroupIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]

---


### ZeroTrustAccessGroupIncludeGsuiteOutputReference <a name="ZeroTrustAccessGroupIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]

---


### ZeroTrustAccessGroupIncludeList <a name="ZeroTrustAccessGroupIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]]

---


### ZeroTrustAccessGroupIncludeOktaList <a name="ZeroTrustAccessGroupIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]

---


### ZeroTrustAccessGroupIncludeOktaOutputReference <a name="ZeroTrustAccessGroupIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]

---


### ZeroTrustAccessGroupIncludeOutputReference <a name="ZeroTrustAccessGroupIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext">put_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext">reset_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames">reset_common_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList">reset_email_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_context` <a name="put_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext"></a>

```python
def put_auth_context(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAuthContext]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeExternalEvaluation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_context` <a name="reset_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext"></a>

```python
def reset_auth_context() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_common_names` <a name="reset_common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames"></a>

```python
def reset_common_names() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_email_list` <a name="reset_email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList"></a>

```python
def reset_email_list() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext">auth_context</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput">auth_context_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput">common_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput">email_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_context`<sup>Required</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext"></a>

```python
auth_context: ZeroTrustAccessGroupIncludeAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure"></a>

```python
azure: ZeroTrustAccessGroupIncludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: ZeroTrustAccessGroupIncludeExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github"></a>

```python
github: ZeroTrustAccessGroupIncludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite"></a>

```python
gsuite: ZeroTrustAccessGroupIncludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta"></a>

```python
okta: ZeroTrustAccessGroupIncludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml"></a>

```python
saml: ZeroTrustAccessGroupIncludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_context_input`<sup>Optional</sup> <a name="auth_context_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput"></a>

```python
auth_context_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>]]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `common_names_input`<sup>Optional</sup> <a name="common_names_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput"></a>

```python
common_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list_input`<sup>Optional</sup> <a name="email_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput"></a>

```python
email_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>]]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `common_names`<sup>Required</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list`<sup>Required</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>]

---


### ZeroTrustAccessGroupIncludeSamlList <a name="ZeroTrustAccessGroupIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupIncludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]]

---


### ZeroTrustAccessGroupIncludeSamlOutputReference <a name="ZeroTrustAccessGroupIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupIncludeSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>]

---


### ZeroTrustAccessGroupRequireAuthContextList <a name="ZeroTrustAccessGroupRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]

---


### ZeroTrustAccessGroupRequireAuthContextOutputReference <a name="ZeroTrustAccessGroupRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput">ac_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId">ac_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ac_id_input`<sup>Optional</sup> <a name="ac_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput"></a>

```python
ac_id_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ac_id`<sup>Required</sup> <a name="ac_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId"></a>

```python
ac_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireAuthContext]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]

---


### ZeroTrustAccessGroupRequireAzureList <a name="ZeroTrustAccessGroupRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]

---


### ZeroTrustAccessGroupRequireAzureOutputReference <a name="ZeroTrustAccessGroupRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]

---


### ZeroTrustAccessGroupRequireExternalEvaluationList <a name="ZeroTrustAccessGroupRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]

---


### ZeroTrustAccessGroupRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireExternalEvaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]

---


### ZeroTrustAccessGroupRequireGithubList <a name="ZeroTrustAccessGroupRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]

---


### ZeroTrustAccessGroupRequireGithubOutputReference <a name="ZeroTrustAccessGroupRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]

---


### ZeroTrustAccessGroupRequireGsuiteList <a name="ZeroTrustAccessGroupRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]

---


### ZeroTrustAccessGroupRequireGsuiteOutputReference <a name="ZeroTrustAccessGroupRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]

---


### ZeroTrustAccessGroupRequireList <a name="ZeroTrustAccessGroupRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]]

---


### ZeroTrustAccessGroupRequireOktaList <a name="ZeroTrustAccessGroupRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]

---


### ZeroTrustAccessGroupRequireOktaOutputReference <a name="ZeroTrustAccessGroupRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]

---


### ZeroTrustAccessGroupRequireOutputReference <a name="ZeroTrustAccessGroupRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext">put_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext">reset_auth_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames">reset_common_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList">reset_email_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_context` <a name="put_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext"></a>

```python
def put_auth_context(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAuthContext]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireExternalEvaluation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_context` <a name="reset_auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext"></a>

```python
def reset_auth_context() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_common_names` <a name="reset_common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames"></a>

```python
def reset_common_names() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_email_list` <a name="reset_email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList"></a>

```python
def reset_email_list() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext">auth_context</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput">auth_context_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput">common_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput">email_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames">common_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList">email_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_context`<sup>Required</sup> <a name="auth_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext"></a>

```python
auth_context: ZeroTrustAccessGroupRequireAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure"></a>

```python
azure: ZeroTrustAccessGroupRequireAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: ZeroTrustAccessGroupRequireExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github"></a>

```python
github: ZeroTrustAccessGroupRequireGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite"></a>

```python
gsuite: ZeroTrustAccessGroupRequireGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta"></a>

```python
okta: ZeroTrustAccessGroupRequireOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml"></a>

```python
saml: ZeroTrustAccessGroupRequireSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_context_input`<sup>Optional</sup> <a name="auth_context_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput"></a>

```python
auth_context_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAuthContext]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>]]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `common_names_input`<sup>Optional</sup> <a name="common_names_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput"></a>

```python
common_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list_input`<sup>Optional</sup> <a name="email_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput"></a>

```python
email_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireExternalEvaluation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>]]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `common_names`<sup>Required</sup> <a name="common_names" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames"></a>

```python
common_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list`<sup>Required</sup> <a name="email_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList"></a>

```python
email_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequire]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>]

---


### ZeroTrustAccessGroupRequireSamlList <a name="ZeroTrustAccessGroupRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessGroupRequireSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessGroupRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]]

---


### ZeroTrustAccessGroupRequireSamlOutputReference <a name="ZeroTrustAccessGroupRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_group

zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessGroupRequireSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>]

---



