# `dataCloudflareMagicTransitSiteAcl` Submodule <a name="`dataCloudflareMagicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcl <a name="DataCloudflareMagicTransitSiteAcl" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.NewDataCloudflareMagicTransitSiteAcl(scope Construct, id *string, config DataCloudflareMagicTransitSiteAclConfig) DataCloudflareMagicTransitSiteAcl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetAclId">ResetAclId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAclId` <a name="ResetAclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetAclId"></a>

```go
func ResetAclId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAcl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAcl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAcl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAcl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally">ForwardLocally</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1">Lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2">Lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional">Unidirectional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput">AclIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId">AclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardLocally`<sup>Required</sup> <a name="ForwardLocally" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally"></a>

```go
func ForwardLocally() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Lan1`<sup>Required</sup> <a name="Lan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1"></a>

```go
func Lan1() DataCloudflareMagicTransitSiteAclLan1OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a>

---

##### `Lan2`<sup>Required</sup> <a name="Lan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2"></a>

```go
func Lan2() DataCloudflareMagicTransitSiteAclLan2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `Unidirectional`<sup>Required</sup> <a name="Unidirectional" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional"></a>

```go
func Unidirectional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput"></a>

```go
func AclIdInput() *string
```

- *Type:* *string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId"></a>

```go
func AclId() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclConfig <a name="DataCloudflareMagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

&datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAclConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	SiteId: *string,
	AclId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId">AclId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}

---

##### `AclId`<sup>Optional</sup> <a name="AclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId"></a>

```go
AclId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}

---

### DataCloudflareMagicTransitSiteAclLan1 <a name="DataCloudflareMagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

&datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAclLan1 {

}
```


### DataCloudflareMagicTransitSiteAclLan2 <a name="DataCloudflareMagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

&datacloudflaremagictransitsiteacl.DataCloudflareMagicTransitSiteAclLan2 {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.NewDataCloudflareMagicTransitSiteAclLan1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareMagicTransitSiteAclLan1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitSiteAclLan1
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a>

---


### DataCloudflareMagicTransitSiteAclLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflaremagictransitsiteacl"

datacloudflaremagictransitsiteacl.NewDataCloudflareMagicTransitSiteAclLan2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareMagicTransitSiteAclLan2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitSiteAclLan2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a>

---



