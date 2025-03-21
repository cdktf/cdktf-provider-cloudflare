# `dataCloudflareAuthenticatedOriginPullsCertificates` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsCertificates` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificates <a name="DataCloudflareAuthenticatedOriginPullsCertificates" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/authenticated_origin_pulls_certificates cloudflare_authenticated_origin_pulls_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.NewDataCloudflareAuthenticatedOriginPullsCertificates(scope Construct, id *string, config DataCloudflareAuthenticatedOriginPullsCertificatesConfig) DataCloudflareAuthenticatedOriginPullsCertificates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig">DataCloudflareAuthenticatedOriginPullsCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig">DataCloudflareAuthenticatedOriginPullsCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAuthenticatedOriginPullsCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/authenticated_origin_pulls_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result"></a>

```go
func Result() DataCloudflareAuthenticatedOriginPullsCertificatesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesConfig <a name="DataCloudflareAuthenticatedOriginPullsCertificatesConfig" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

&datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/authenticated_origin_pulls_certificates#zone_id DataCloudflareAuthenticatedOriginPullsCertificates#zone_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/authenticated_origin_pulls_certificates#max_items DataCloudflareAuthenticatedOriginPullsCertificates#max_items}

---

### DataCloudflareAuthenticatedOriginPullsCertificatesResult <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResult" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

&datacloudflareauthenticatedoriginpullscertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesResultList <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultList" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.NewDataCloudflareAuthenticatedOriginPullsCertificatesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAuthenticatedOriginPullsCertificatesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflareauthenticatedoriginpullscertificates"

datacloudflareauthenticatedoriginpullscertificates.NewDataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn">UploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn"></a>

```go
func UploadedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAuthenticatedOriginPullsCertificatesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a>

---



