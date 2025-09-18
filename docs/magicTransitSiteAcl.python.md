# `magicTransitSiteAcl` Submodule <a name="`magicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteAcl <a name="MagicTransitSiteAcl" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAcl(
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
  lan1: MagicTransitSiteAclLan1,
  lan2: MagicTransitSiteAclLan2,
  name: str,
  site_id: str,
  description: str = None,
  forward_locally: typing.Union[bool, IResolvable] = None,
  protocols: typing.List[str] = None,
  unidirectional: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forwardLocally">forward_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The desired forwarding action for this ACL policy. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.unidirectional">unidirectional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The desired traffic direction for this ACL policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan1"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}.

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan2"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.name"></a>

- *Type:* str

The name of the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.siteId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.description"></a>

- *Type:* str

Description for the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}

---

##### `forward_locally`<sup>Optional</sup> <a name="forward_locally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forwardLocally"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The desired forwarding action for this ACL policy.

If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}.

---

##### `unidirectional`<sup>Optional</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.unidirectional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The desired traffic direction for this ACL policy.

If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1">put_lan1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2">put_lan2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally">reset_forward_locally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional">reset_unidirectional</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lan1` <a name="put_lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1"></a>

```python
def put_lan1(
  lan_id: str,
  lan_name: str = None,
  port_ranges: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.lanId"></a>

- *Type:* str

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

###### `lan_name`<sup>Optional</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.lanName"></a>

- *Type:* str

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.portRanges"></a>

- *Type:* typing.List[str]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.subnets"></a>

- *Type:* typing.List[str]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

##### `put_lan2` <a name="put_lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2"></a>

```python
def put_lan2(
  lan_id: str,
  lan_name: str = None,
  port_ranges: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.lanId"></a>

- *Type:* str

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

###### `lan_name`<sup>Optional</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.lanName"></a>

- *Type:* str

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

###### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.portRanges"></a>

- *Type:* typing.List[str]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.subnets"></a>

- *Type:* typing.List[str]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_forward_locally` <a name="reset_forward_locally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally"></a>

```python
def reset_forward_locally() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_unidirectional` <a name="reset_unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional"></a>

```python
def reset_unidirectional() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicTransitSiteAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput">forward_locally_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input">lan1_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input">lan2_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput">unidirectional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally">forward_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional">unidirectional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1"></a>

```python
lan1: MagicTransitSiteAclLan1OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a>

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2"></a>

```python
lan2: MagicTransitSiteAclLan2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `forward_locally_input`<sup>Optional</sup> <a name="forward_locally_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput"></a>

```python
forward_locally_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lan1_input`<sup>Optional</sup> <a name="lan1_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input"></a>

```python
lan1_input: typing.Union[IResolvable, MagicTransitSiteAclLan1]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>]

---

##### `lan2_input`<sup>Optional</sup> <a name="lan2_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input"></a>

```python
lan2_input: typing.Union[IResolvable, MagicTransitSiteAclLan2]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `unidirectional_input`<sup>Optional</sup> <a name="unidirectional_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput"></a>

```python
unidirectional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forward_locally`<sup>Required</sup> <a name="forward_locally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally"></a>

```python
forward_locally: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `unidirectional`<sup>Required</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional"></a>

```python
unidirectional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteAclConfig <a name="MagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  lan1: MagicTransitSiteAclLan1,
  lan2: MagicTransitSiteAclLan2,
  name: str,
  site_id: str,
  description: str = None,
  forward_locally: typing.Union[bool, IResolvable] = None,
  protocols: typing.List[str] = None,
  unidirectional: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name">name</a></code> | <code>str</code> | The name of the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId">site_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description">description</a></code> | <code>str</code> | Description for the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally">forward_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The desired forwarding action for this ACL policy. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional">unidirectional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The desired traffic direction for this ACL policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1"></a>

```python
lan1: MagicTransitSiteAclLan1
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}.

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2"></a>

```python
lan2: MagicTransitSiteAclLan2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}

---

##### `forward_locally`<sup>Optional</sup> <a name="forward_locally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally"></a>

```python
forward_locally: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The desired forwarding action for this ACL policy.

If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}.

---

##### `unidirectional`<sup>Optional</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional"></a>

```python
unidirectional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The desired traffic direction for this ACL policy.

If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}

---

### MagicTransitSiteAclLan1 <a name="MagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAclLan1(
  lan_id: str,
  lan_name: str = None,
  port_ranges: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId">lan_id</a></code> | <code>str</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName">lan_name</a></code> | <code>str</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lan_name`<sup>Optional</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

### MagicTransitSiteAclLan2 <a name="MagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAclLan2(
  lan_id: str,
  lan_name: str = None,
  port_ranges: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId">lan_id</a></code> | <code>str</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName">lan_name</a></code> | <code>str</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lan_name`<sup>Optional</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteAclLan1OutputReference <a name="MagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName">reset_lan_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lan_name` <a name="reset_lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName"></a>

```python
def reset_lan_name() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput">lan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput">lan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lan_id_input`<sup>Optional</sup> <a name="lan_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput"></a>

```python
lan_id_input: str
```

- *Type:* str

---

##### `lan_name_input`<sup>Optional</sup> <a name="lan_name_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput"></a>

```python
lan_name_input: str
```

- *Type:* str

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput"></a>

```python
port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicTransitSiteAclLan1]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>]

---


### MagicTransitSiteAclLan2OutputReference <a name="MagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import magic_transit_site_acl

magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName">reset_lan_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lan_name` <a name="reset_lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName"></a>

```python
def reset_lan_name() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput">lan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput">lan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput">port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName">lan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lan_id_input`<sup>Optional</sup> <a name="lan_id_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput"></a>

```python
lan_id_input: str
```

- *Type:* str

---

##### `lan_name_input`<sup>Optional</sup> <a name="lan_name_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput"></a>

```python
lan_name_input: str
```

- *Type:* str

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput"></a>

```python
port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `lan_name`<sup>Required</sup> <a name="lan_name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```python
lan_name: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MagicTransitSiteAclLan2]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>]

---



