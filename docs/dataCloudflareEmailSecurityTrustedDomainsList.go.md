# `dataCloudflareEmailSecurityTrustedDomainsList` Submodule <a name="`dataCloudflareEmailSecurityTrustedDomainsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityTrustedDomainsList <a name="DataCloudflareEmailSecurityTrustedDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list cloudflare_email_security_trusted_domains_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.NewDataCloudflareEmailSecurityTrustedDomainsList(scope Construct, id *string, config DataCloudflareEmailSecurityTrustedDomainsListConfig) DataCloudflareEmailSecurityTrustedDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig">DataCloudflareEmailSecurityTrustedDomainsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig">DataCloudflareEmailSecurityTrustedDomainsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsRecent">ResetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsSimilarity">ResetIsSimilarity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetIsRecent` <a name="ResetIsRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsRecent"></a>

```go
func ResetIsRecent()
```

##### `ResetIsSimilarity` <a name="ResetIsSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetIsSimilarity"></a>

```go
func ResetIsSimilarity()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.resetSearch"></a>

```go
func ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomainsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomainsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomainsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailSecurityTrustedDomainsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomainsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList">DataCloudflareEmailSecurityTrustedDomainsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecentInput">IsRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarityInput">IsSimilarityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.search">Search</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.result"></a>

```go
func Result() DataCloudflareEmailSecurityTrustedDomainsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList">DataCloudflareEmailSecurityTrustedDomainsListResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `IsRecentInput`<sup>Optional</sup> <a name="IsRecentInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecentInput"></a>

```go
func IsRecentInput() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarityInput`<sup>Optional</sup> <a name="IsSimilarityInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarityInput"></a>

```go
func IsSimilarityInput() interface{}
```

- *Type:* interface{}

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isRecent"></a>

```go
func IsRecent() interface{}
```

- *Type:* interface{}

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.isSimilarity"></a>

```go
func IsSimilarity() interface{}
```

- *Type:* interface{}

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityTrustedDomainsListConfig <a name="DataCloudflareEmailSecurityTrustedDomainsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

&datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Direction: *string,
	IsRecent: interface{},
	IsSimilarity: interface{},
	MaxItems: *f64,
	Order: *string,
	Pattern: *string,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isRecent">IsRecent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_recent DataCloudflareEmailSecurityTrustedDomainsList#is_recent}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isSimilarity">IsSimilarity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_similarity DataCloudflareEmailSecurityTrustedDomainsList#is_similarity}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.order">Order</a></code> | <code>*string</code> | The field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.search">Search</a></code> | <code>*string</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#account_id DataCloudflareEmailSecurityTrustedDomainsList#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#direction DataCloudflareEmailSecurityTrustedDomainsList#direction}

---

##### `IsRecent`<sup>Optional</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isRecent"></a>

```go
IsRecent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_recent DataCloudflareEmailSecurityTrustedDomainsList#is_recent}.

---

##### `IsSimilarity`<sup>Optional</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.isSimilarity"></a>

```go
IsSimilarity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#is_similarity DataCloudflareEmailSecurityTrustedDomainsList#is_similarity}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#max_items DataCloudflareEmailSecurityTrustedDomainsList#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

The field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#order DataCloudflareEmailSecurityTrustedDomainsList#order}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#pattern DataCloudflareEmailSecurityTrustedDomainsList#pattern}.

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/email_security_trusted_domains_list#search DataCloudflareEmailSecurityTrustedDomainsList#search}

---

### DataCloudflareEmailSecurityTrustedDomainsListResult <a name="DataCloudflareEmailSecurityTrustedDomainsListResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

&datacloudflareemailsecuritytrusteddomainslist.DataCloudflareEmailSecurityTrustedDomainsListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityTrustedDomainsListResultList <a name="DataCloudflareEmailSecurityTrustedDomainsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.NewDataCloudflareEmailSecurityTrustedDomainsListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailSecurityTrustedDomainsListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference <a name="DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailsecuritytrusteddomainslist"

datacloudflareemailsecuritytrusteddomainslist.NewDataCloudflareEmailSecurityTrustedDomainsListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRecent">IsRecent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRegex">IsRegex</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isSimilarity">IsSimilarity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult">DataCloudflareEmailSecurityTrustedDomainsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRecent"></a>

```go
func IsRecent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isRegex"></a>

```go
func IsRegex() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.isSimilarity"></a>

```go
func IsSimilarity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailSecurityTrustedDomainsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomainsList.DataCloudflareEmailSecurityTrustedDomainsListResult">DataCloudflareEmailSecurityTrustedDomainsListResult</a>

---



