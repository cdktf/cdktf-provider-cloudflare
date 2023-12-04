# `accessIdentityProvider` Submodule <a name="`accessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.accessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessIdentityProvider <a name="AccessIdentityProvider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider cloudflare_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  account_id: str = None,
  config: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]] = None,
  id: str = None,
  scim_config: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.type">type</a></code> | <code>str</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scimConfig">scim_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]</code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.name"></a>

- *Type:* str

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#name AccessIdentityProvider#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.type"></a>

- *Type:* str

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#type AccessIdentityProvider#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#config AccessIdentityProvider#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_config`<sup>Optional</sup> <a name="scim_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scimConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#scim_config AccessIdentityProvider#scim_config}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig">put_scim_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig">reset_scim_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig"></a>

```python
def put_config(
  value: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]

---

##### `put_scim_config` <a name="put_scim_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig"></a>

```python
def put_scim_config(
  value: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scim_config` <a name="reset_scim_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig"></a>

```python
def reset_scim_config() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig">scim_config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput">scim_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config"></a>

```python
config: AccessIdentityProviderConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a>

---

##### `scim_config`<sup>Required</sup> <a name="scim_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig"></a>

```python
scim_config: AccessIdentityProviderScimConfigList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scim_config_input`<sup>Optional</sup> <a name="scim_config_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput"></a>

```python
scim_config_input: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessIdentityProviderConfig <a name="AccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  account_id: str = None,
  config: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]] = None,
  id: str = None,
  scim_config: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name">name</a></code> | <code>str</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type">type</a></code> | <code>str</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig">scim_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]</code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#name AccessIdentityProvider#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#type AccessIdentityProvider#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config"></a>

```python
config: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#config AccessIdentityProvider#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scim_config`<sup>Optional</sup> <a name="scim_config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig"></a>

```python
scim_config: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#scim_config AccessIdentityProvider#scim_config}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

### AccessIdentityProviderConfigA <a name="AccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderConfigA(
  api_token: str = None,
  apps_domain: str = None,
  attributes: typing.List[str] = None,
  authorization_server_id: str = None,
  auth_url: str = None,
  centrify_account: str = None,
  centrify_app_id: str = None,
  certs_url: str = None,
  claims: typing.List[str] = None,
  client_id: str = None,
  client_secret: str = None,
  conditional_access_enabled: typing.Union[bool, IResolvable] = None,
  directory_id: str = None,
  email_attribute_name: str = None,
  email_claim_name: str = None,
  idp_public_cert: str = None,
  issuer_url: str = None,
  okta_account: str = None,
  onelogin_account: str = None,
  ping_env_id: str = None,
  pkce_enabled: typing.Union[bool, IResolvable] = None,
  scopes: typing.List[str] = None,
  sign_request: typing.Union[bool, IResolvable] = None,
  sso_target_url: str = None,
  support_groups: typing.Union[bool, IResolvable] = None,
  token_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken">api_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain">apps_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId">authorization_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl">auth_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount">centrify_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId">centrify_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl">certs_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims">claims</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled">conditional_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName">email_attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName">email_claim_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert">idp_public_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount">okta_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount">onelogin_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId">ping_env_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled">pkce_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl">sso_target_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups">support_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}. |

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}.

---

##### `apps_domain`<sup>Optional</sup> <a name="apps_domain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain"></a>

```python
apps_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}.

---

##### `authorization_server_id`<sup>Optional</sup> <a name="authorization_server_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId"></a>

```python
authorization_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}.

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}.

---

##### `centrify_account`<sup>Optional</sup> <a name="centrify_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount"></a>

```python
centrify_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}.

---

##### `centrify_app_id`<sup>Optional</sup> <a name="centrify_app_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId"></a>

```python
centrify_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}.

---

##### `certs_url`<sup>Optional</sup> <a name="certs_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl"></a>

```python
certs_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}.

---

##### `claims`<sup>Optional</sup> <a name="claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims"></a>

```python
claims: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}.

---

##### `conditional_access_enabled`<sup>Optional</sup> <a name="conditional_access_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```python
conditional_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}.

---

##### `email_attribute_name`<sup>Optional</sup> <a name="email_attribute_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName"></a>

```python
email_attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}.

---

##### `email_claim_name`<sup>Optional</sup> <a name="email_claim_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName"></a>

```python
email_claim_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}.

---

##### `idp_public_cert`<sup>Optional</sup> <a name="idp_public_cert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert"></a>

```python
idp_public_cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}.

---

##### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}.

---

##### `okta_account`<sup>Optional</sup> <a name="okta_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount"></a>

```python
okta_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}.

---

##### `onelogin_account`<sup>Optional</sup> <a name="onelogin_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount"></a>

```python
onelogin_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}.

---

##### `ping_env_id`<sup>Optional</sup> <a name="ping_env_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId"></a>

```python
ping_env_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}.

---

##### `pkce_enabled`<sup>Optional</sup> <a name="pkce_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled"></a>

```python
pkce_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}.

---

##### `sign_request`<sup>Optional</sup> <a name="sign_request" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}.

---

##### `sso_target_url`<sup>Optional</sup> <a name="sso_target_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```python
sso_target_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}.

---

##### `support_groups`<sup>Optional</sup> <a name="support_groups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups"></a>

```python
support_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}.

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}.

---

### AccessIdentityProviderScimConfig <a name="AccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderScimConfig(
  enabled: typing.Union[bool, IResolvable] = None,
  group_member_deprovision: typing.Union[bool, IResolvable] = None,
  seat_deprovision: typing.Union[bool, IResolvable] = None,
  secret: str = None,
  user_deprovision: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision">group_member_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision">seat_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision">user_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}.

---

##### `group_member_deprovision`<sup>Optional</sup> <a name="group_member_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision"></a>

```python
group_member_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}.

---

##### `seat_deprovision`<sup>Optional</sup> <a name="seat_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```python
seat_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}.

---

##### `user_deprovision`<sup>Optional</sup> <a name="user_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision"></a>

```python
user_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessIdentityProviderConfigAList <a name="AccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessIdentityProviderConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessIdentityProviderConfigA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]]

---


### AccessIdentityProviderConfigAOutputReference <a name="AccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain">reset_apps_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">reset_authorization_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl">reset_auth_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">reset_centrify_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">reset_centrify_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl">reset_certs_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims">reset_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">reset_conditional_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">reset_email_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName">reset_email_claim_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">reset_idp_public_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl">reset_issuer_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount">reset_okta_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount">reset_onelogin_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId">reset_ping_env_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled">reset_pkce_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest">reset_sign_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">reset_sso_target_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups">reset_support_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_token` <a name="reset_api_token" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_apps_domain` <a name="reset_apps_domain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```python
def reset_apps_domain() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_authorization_server_id` <a name="reset_authorization_server_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```python
def reset_authorization_server_id() -> None
```

##### `reset_auth_url` <a name="reset_auth_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```python
def reset_auth_url() -> None
```

##### `reset_centrify_account` <a name="reset_centrify_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```python
def reset_centrify_account() -> None
```

##### `reset_centrify_app_id` <a name="reset_centrify_app_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```python
def reset_centrify_app_id() -> None
```

##### `reset_certs_url` <a name="reset_certs_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```python
def reset_certs_url() -> None
```

##### `reset_claims` <a name="reset_claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```python
def reset_claims() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_conditional_access_enabled` <a name="reset_conditional_access_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```python
def reset_conditional_access_enabled() -> None
```

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_email_attribute_name` <a name="reset_email_attribute_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```python
def reset_email_attribute_name() -> None
```

##### `reset_email_claim_name` <a name="reset_email_claim_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```python
def reset_email_claim_name() -> None
```

##### `reset_idp_public_cert` <a name="reset_idp_public_cert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```python
def reset_idp_public_cert() -> None
```

##### `reset_issuer_url` <a name="reset_issuer_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```python
def reset_issuer_url() -> None
```

##### `reset_okta_account` <a name="reset_okta_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```python
def reset_okta_account() -> None
```

##### `reset_onelogin_account` <a name="reset_onelogin_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```python
def reset_onelogin_account() -> None
```

##### `reset_ping_env_id` <a name="reset_ping_env_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```python
def reset_ping_env_id() -> None
```

##### `reset_pkce_enabled` <a name="reset_pkce_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```python
def reset_pkce_enabled() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_sign_request` <a name="reset_sign_request" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```python
def reset_sign_request() -> None
```

##### `reset_sso_target_url` <a name="reset_sso_target_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```python
def reset_sso_target_url() -> None
```

##### `reset_support_groups` <a name="reset_support_groups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```python
def reset_support_groups() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput">apps_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">authorization_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">centrify_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">centrify_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput">certs_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput">claims_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">conditional_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">email_attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">email_claim_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">idp_public_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">okta_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">onelogin_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">ping_env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">pkce_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput">sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">sso_target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">support_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain">apps_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId">authorization_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount">centrify_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId">centrify_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl">certs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims">claims</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">conditional_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName">email_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName">email_claim_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert">idp_public_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount">okta_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount">onelogin_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId">ping_env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled">pkce_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest">sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">sso_target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups">support_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `apps_domain_input`<sup>Optional</sup> <a name="apps_domain_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```python
apps_domain_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_server_id_input`<sup>Optional</sup> <a name="authorization_server_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```python
authorization_server_id_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `centrify_account_input`<sup>Optional</sup> <a name="centrify_account_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```python
centrify_account_input: str
```

- *Type:* str

---

##### `centrify_app_id_input`<sup>Optional</sup> <a name="centrify_app_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```python
centrify_app_id_input: str
```

- *Type:* str

---

##### `certs_url_input`<sup>Optional</sup> <a name="certs_url_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```python
certs_url_input: str
```

- *Type:* str

---

##### `claims_input`<sup>Optional</sup> <a name="claims_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```python
claims_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `conditional_access_enabled_input`<sup>Optional</sup> <a name="conditional_access_enabled_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```python
conditional_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `email_attribute_name_input`<sup>Optional</sup> <a name="email_attribute_name_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```python
email_attribute_name_input: str
```

- *Type:* str

---

##### `email_claim_name_input`<sup>Optional</sup> <a name="email_claim_name_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```python
email_claim_name_input: str
```

- *Type:* str

---

##### `idp_public_cert_input`<sup>Optional</sup> <a name="idp_public_cert_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```python
idp_public_cert_input: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `okta_account_input`<sup>Optional</sup> <a name="okta_account_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```python
okta_account_input: str
```

- *Type:* str

---

##### `onelogin_account_input`<sup>Optional</sup> <a name="onelogin_account_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```python
onelogin_account_input: str
```

- *Type:* str

---

##### `ping_env_id_input`<sup>Optional</sup> <a name="ping_env_id_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```python
ping_env_id_input: str
```

- *Type:* str

---

##### `pkce_enabled_input`<sup>Optional</sup> <a name="pkce_enabled_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```python
pkce_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sign_request_input`<sup>Optional</sup> <a name="sign_request_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```python
sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_target_url_input`<sup>Optional</sup> <a name="sso_target_url_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```python
sso_target_url_input: str
```

- *Type:* str

---

##### `support_groups_input`<sup>Optional</sup> <a name="support_groups_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```python
support_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `apps_domain`<sup>Required</sup> <a name="apps_domain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```python
apps_domain: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_server_id`<sup>Required</sup> <a name="authorization_server_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```python
authorization_server_id: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `centrify_account`<sup>Required</sup> <a name="centrify_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```python
centrify_account: str
```

- *Type:* str

---

##### `centrify_app_id`<sup>Required</sup> <a name="centrify_app_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```python
centrify_app_id: str
```

- *Type:* str

---

##### `certs_url`<sup>Required</sup> <a name="certs_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```python
certs_url: str
```

- *Type:* str

---

##### `claims`<sup>Required</sup> <a name="claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims"></a>

```python
claims: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `conditional_access_enabled`<sup>Required</sup> <a name="conditional_access_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```python
conditional_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `email_attribute_name`<sup>Required</sup> <a name="email_attribute_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```python
email_attribute_name: str
```

- *Type:* str

---

##### `email_claim_name`<sup>Required</sup> <a name="email_claim_name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```python
email_claim_name: str
```

- *Type:* str

---

##### `idp_public_cert`<sup>Required</sup> <a name="idp_public_cert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```python
idp_public_cert: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `okta_account`<sup>Required</sup> <a name="okta_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```python
okta_account: str
```

- *Type:* str

---

##### `onelogin_account`<sup>Required</sup> <a name="onelogin_account" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```python
onelogin_account: str
```

- *Type:* str

---

##### `ping_env_id`<sup>Required</sup> <a name="ping_env_id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```python
ping_env_id: str
```

- *Type:* str

---

##### `pkce_enabled`<sup>Required</sup> <a name="pkce_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```python
pkce_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sign_request`<sup>Required</sup> <a name="sign_request" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```python
sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sso_target_url`<sup>Required</sup> <a name="sso_target_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```python
sso_target_url: str
```

- *Type:* str

---

##### `support_groups`<sup>Required</sup> <a name="support_groups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```python
support_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessIdentityProviderConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>]

---


### AccessIdentityProviderScimConfigList <a name="AccessIdentityProviderScimConfigList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderScimConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessIdentityProviderScimConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessIdentityProviderScimConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]]

---


### AccessIdentityProviderScimConfigOutputReference <a name="AccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_identity_provider

accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision">reset_group_member_deprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">reset_seat_deprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">reset_user_deprovision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_group_member_deprovision` <a name="reset_group_member_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision"></a>

```python
def reset_group_member_deprovision() -> None
```

##### `reset_seat_deprovision` <a name="reset_seat_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```python
def reset_seat_deprovision() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_user_deprovision` <a name="reset_user_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```python
def reset_user_deprovision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput">group_member_deprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">seat_deprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">user_deprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision">group_member_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">seat_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision">user_deprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_member_deprovision_input`<sup>Optional</sup> <a name="group_member_deprovision_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput"></a>

```python
group_member_deprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `seat_deprovision_input`<sup>Optional</sup> <a name="seat_deprovision_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```python
seat_deprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `user_deprovision_input`<sup>Optional</sup> <a name="user_deprovision_input" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```python
user_deprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_member_deprovision`<sup>Required</sup> <a name="group_member_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision"></a>

```python
group_member_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `seat_deprovision`<sup>Required</sup> <a name="seat_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```python
seat_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `user_deprovision`<sup>Required</sup> <a name="user_deprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```python
user_deprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessIdentityProviderScimConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>]

---



