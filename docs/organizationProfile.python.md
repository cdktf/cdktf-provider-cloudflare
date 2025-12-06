# `organizationProfile` Submodule <a name="`organizationProfile` Submodule" id="@cdktf/provider-cloudflare.organizationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationProfileA <a name="OrganizationProfileA" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile cloudflare_organization_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  business_address: str,
  business_email: str,
  business_name: str,
  business_phone: str,
  external_metadata: str,
  organization_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessAddress">business_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessEmail">business_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessName">business_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessPhone">business_phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.externalMetadata">external_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `business_address`<sup>Required</sup> <a name="business_address" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}.

---

##### `business_email`<sup>Required</sup> <a name="business_email" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}.

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}.

---

##### `business_phone`<sup>Required</sup> <a name="business_phone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessPhone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}.

---

##### `external_metadata`<sup>Required</sup> <a name="external_metadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.externalMetadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}.

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.organizationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationProfileA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationProfileA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationProfileA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddressInput">business_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmailInput">business_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessNameInput">business_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhoneInput">business_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadataInput">external_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddress">business_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmail">business_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessName">business_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhone">business_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadata">external_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `business_address_input`<sup>Optional</sup> <a name="business_address_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddressInput"></a>

```python
business_address_input: str
```

- *Type:* str

---

##### `business_email_input`<sup>Optional</sup> <a name="business_email_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmailInput"></a>

```python
business_email_input: str
```

- *Type:* str

---

##### `business_name_input`<sup>Optional</sup> <a name="business_name_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessNameInput"></a>

```python
business_name_input: str
```

- *Type:* str

---

##### `business_phone_input`<sup>Optional</sup> <a name="business_phone_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhoneInput"></a>

```python
business_phone_input: str
```

- *Type:* str

---

##### `external_metadata_input`<sup>Optional</sup> <a name="external_metadata_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadataInput"></a>

```python
external_metadata_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `business_address`<sup>Required</sup> <a name="business_address" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddress"></a>

```python
business_address: str
```

- *Type:* str

---

##### `business_email`<sup>Required</sup> <a name="business_email" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmail"></a>

```python
business_email: str
```

- *Type:* str

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

---

##### `business_phone`<sup>Required</sup> <a name="business_phone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhone"></a>

```python
business_phone: str
```

- *Type:* str

---

##### `external_metadata`<sup>Required</sup> <a name="external_metadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadata"></a>

```python
external_metadata: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationProfileAConfig <a name="OrganizationProfileAConfig" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import organization_profile

organizationProfile.OrganizationProfileAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  business_address: str,
  business_email: str,
  business_name: str,
  business_phone: str,
  external_metadata: str,
  organization_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessAddress">business_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessEmail">business_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessName">business_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessPhone">business_phone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.externalMetadata">external_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `business_address`<sup>Required</sup> <a name="business_address" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessAddress"></a>

```python
business_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}.

---

##### `business_email`<sup>Required</sup> <a name="business_email" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessEmail"></a>

```python
business_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}.

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}.

---

##### `business_phone`<sup>Required</sup> <a name="business_phone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessPhone"></a>

```python
business_phone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}.

---

##### `external_metadata`<sup>Required</sup> <a name="external_metadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.externalMetadata"></a>

```python
external_metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}.

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}.

---



