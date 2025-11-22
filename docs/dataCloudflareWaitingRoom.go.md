# `dataCloudflareWaitingRoom` Submodule <a name="`dataCloudflareWaitingRoom` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoom <a name="DataCloudflareWaitingRoom" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.NewDataCloudflareWaitingRoom(scope Construct, id *string, config DataCloudflareWaitingRoomConfig) DataCloudflareWaitingRoom
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig">DataCloudflareWaitingRoomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig">DataCloudflareWaitingRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.DataCloudflareWaitingRoom_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.DataCloudflareWaitingRoom_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.DataCloudflareWaitingRoom_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.DataCloudflareWaitingRoom_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWaitingRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes">AdditionalRoutes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes">CookieAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix">CookieSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage">DefaultTemplateLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands">EnabledOriginCommands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled">JsonResponseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime">NextEventPrequeueStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime">NextEventStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll">QueueAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode">QueueingStatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended">Suspended</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalRoutes`<sup>Required</sup> <a name="AdditionalRoutes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes"></a>

```go
func AdditionalRoutes() DataCloudflareWaitingRoomAdditionalRoutesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a>

---

##### `CookieAttributes`<sup>Required</sup> <a name="CookieAttributes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes"></a>

```go
func CookieAttributes() DataCloudflareWaitingRoomCookieAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a>

---

##### `CookieSuffix`<sup>Required</sup> <a name="CookieSuffix" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix"></a>

```go
func CookieSuffix() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml"></a>

```go
func CustomPageHtml() *string
```

- *Type:* *string

---

##### `DefaultTemplateLanguage`<sup>Required</sup> <a name="DefaultTemplateLanguage" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage"></a>

```go
func DefaultTemplateLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal"></a>

```go
func DisableSessionRenewal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnabledOriginCommands`<sup>Required</sup> <a name="EnabledOriginCommands" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands"></a>

```go
func EnabledOriginCommands() *[]*string
```

- *Type:* *[]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JsonResponseEnabled`<sup>Required</sup> <a name="JsonResponseEnabled" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled"></a>

```go
func JsonResponseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute"></a>

```go
func NewUsersPerMinute() *f64
```

- *Type:* *f64

---

##### `NextEventPrequeueStartTime`<sup>Required</sup> <a name="NextEventPrequeueStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime"></a>

```go
func NextEventPrequeueStartTime() *string
```

- *Type:* *string

---

##### `NextEventStartTime`<sup>Required</sup> <a name="NextEventStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime"></a>

```go
func NextEventStartTime() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `QueueAll`<sup>Required</sup> <a name="QueueAll" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll"></a>

```go
func QueueAll() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod"></a>

```go
func QueueingMethod() *string
```

- *Type:* *string

---

##### `QueueingStatusCode`<sup>Required</sup> <a name="QueueingStatusCode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode"></a>

```go
func QueueingStatusCode() *f64
```

- *Type:* *f64

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration"></a>

```go
func SessionDuration() *f64
```

- *Type:* *f64

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended"></a>

```go
func Suspended() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers"></a>

```go
func TotalActiveUsers() *f64
```

- *Type:* *f64

---

##### `TurnstileAction`<sup>Required</sup> <a name="TurnstileAction" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction"></a>

```go
func TurnstileAction() *string
```

- *Type:* *string

---

##### `TurnstileMode`<sup>Required</sup> <a name="TurnstileMode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode"></a>

```go
func TurnstileMode() *string
```

- *Type:* *string

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput"></a>

```go
func WaitingRoomIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId"></a>

```go
func WaitingRoomId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomAdditionalRoutes <a name="DataCloudflareWaitingRoomAdditionalRoutes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

&datacloudflarewaitingroom.DataCloudflareWaitingRoomAdditionalRoutes {

}
```


### DataCloudflareWaitingRoomConfig <a name="DataCloudflareWaitingRoomConfig" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

&datacloudflarewaitingroom.DataCloudflareWaitingRoomConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WaitingRoomId: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId"></a>

```go
WaitingRoomId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}

---

### DataCloudflareWaitingRoomCookieAttributes <a name="DataCloudflareWaitingRoomCookieAttributes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

&datacloudflarewaitingroom.DataCloudflareWaitingRoomCookieAttributes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWaitingRoomAdditionalRoutesList <a name="DataCloudflareWaitingRoomAdditionalRoutesList" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.NewDataCloudflareWaitingRoomAdditionalRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWaitingRoomAdditionalRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get"></a>

```go
func Get(index *f64) DataCloudflareWaitingRoomAdditionalRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWaitingRoomAdditionalRoutesOutputReference <a name="DataCloudflareWaitingRoomAdditionalRoutesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.NewDataCloudflareWaitingRoomAdditionalRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWaitingRoomAdditionalRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWaitingRoomAdditionalRoutes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a>

---


### DataCloudflareWaitingRoomCookieAttributesOutputReference <a name="DataCloudflareWaitingRoomCookieAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroom"

datacloudflarewaitingroom.NewDataCloudflareWaitingRoomCookieAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWaitingRoomCookieAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite">Samesite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure">Secure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite"></a>

```go
func Samesite() *string
```

- *Type:* *string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure"></a>

```go
func Secure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWaitingRoomCookieAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a>

---



