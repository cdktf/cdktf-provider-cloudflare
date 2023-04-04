# `teamsAccount` Submodule <a name="`teamsAccount` Submodule" id="@cdktf/provider-cloudflare.teamsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsAccount <a name="TeamsAccount" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account cloudflare_teams_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccount(scope Construct, id *string, config TeamsAccountConfig) TeamsAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus">PutAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips">PutFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus">ResetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips">ResetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled">ResetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled">ResetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus"></a>

```go
func PutAntivirus(value TeamsAccountAntivirus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage"></a>

```go
func PutBlockPage(value TeamsAccountBlockPage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips"></a>

```go
func PutFips(value TeamsAccountFips)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging"></a>

```go
func PutLogging(value TeamsAccountLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy"></a>

```go
func PutProxy(value TeamsAccountProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled"></a>

```go
func ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus"></a>

```go
func ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage"></a>

```go
func ResetBlockPage()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips"></a>

```go
func ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled"></a>

```go
func ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled"></a>

```go
func ResetUrlBrowserIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.TeamsAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.TeamsAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.TeamsAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus"></a>

```go
func Antivirus() TeamsAccountAntivirusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage"></a>

```go
func BlockPage() TeamsAccountBlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips"></a>

```go
func Fips() TeamsAccountFipsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging"></a>

```go
func Logging() TeamsAccountLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy"></a>

```go
func Proxy() TeamsAccountProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput"></a>

```go
func ActivityLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput"></a>

```go
func AntivirusInput() TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput"></a>

```go
func BlockPageInput() TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput"></a>

```go
func FipsInput() TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput"></a>

```go
func LoggingInput() TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput"></a>

```go
func ProxyInput() TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput"></a>

```go
func TlsDecryptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput"></a>

```go
func UrlBrowserIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled"></a>

```go
func ActivityLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled"></a>

```go
func TlsDecryptEnabled() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled"></a>

```go
func UrlBrowserIsolationEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsAccountAntivirus <a name="TeamsAccountAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountAntivirus {
	EnabledDownloadPhase: interface{},
	EnabledUploadPhase: interface{},
	FailClosed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | Block requests for files that cannot be scanned. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase"></a>

```go
EnabledDownloadPhase interface{}
```

- *Type:* interface{}

Scan on file download.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase"></a>

```go
EnabledUploadPhase interface{}
```

- *Type:* interface{}

Scan on file upload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed"></a>

```go
FailClosed interface{}
```

- *Type:* interface{}

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#fail_closed TeamsAccount#fail_closed}

---

### TeamsAccountBlockPage <a name="TeamsAccountBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountBlockPage {
	BackgroundColor: *string,
	Enabled: interface{},
	FooterText: *string,
	HeaderText: *string,
	LogoPath: *string,
	MailtoAddress: *string,
	MailtoSubject: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText">FooterText</a></code> | <code>*string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText">HeaderText</a></code> | <code>*string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath">LogoPath</a></code> | <code>*string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name">Name</a></code> | <code>*string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#background_color TeamsAccount#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicator of enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#enabled TeamsAccount#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText"></a>

```go
FooterText *string
```

- *Type:* *string

Block page footer text.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#footer_text TeamsAccount#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText"></a>

```go
HeaderText *string
```

- *Type:* *string

Block page header text.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#header_text TeamsAccount#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath"></a>

```go
LogoPath *string
```

- *Type:* *string

URL of block page logo.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#logo_path TeamsAccount#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress"></a>

```go
MailtoAddress *string
```

- *Type:* *string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#mailto_address TeamsAccount#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject"></a>

```go
MailtoSubject *string
```

- *Type:* *string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of block page configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#name TeamsAccount#name}

---

### TeamsAccountConfig <a name="TeamsAccountConfig" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ActivityLogEnabled: interface{},
	Antivirus: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountAntivirus,
	BlockPage: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountBlockPage,
	Fips: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountFips,
	Id: *string,
	Logging: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountLogging,
	Proxy: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountProxy,
	TlsDecryptEnabled: interface{},
	UrlBrowserIsolationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | Safely browse websites in Browser Isolation through a URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#account_id TeamsAccount#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled"></a>

```go
ActivityLogEnabled interface{}
```

- *Type:* interface{}

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus"></a>

```go
Antivirus TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#antivirus TeamsAccount#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage"></a>

```go
BlockPage TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#block_page TeamsAccount#block_page}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips"></a>

```go
Fips TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#fips TeamsAccount#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging"></a>

```go
Logging TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#logging TeamsAccount#logging}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy"></a>

```go
Proxy TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#proxy TeamsAccount#proxy}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled"></a>

```go
TlsDecryptEnabled interface{}
```

- *Type:* interface{}

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled"></a>

```go
UrlBrowserIsolationEnabled interface{}
```

- *Type:* interface{}

Safely browse websites in Browser Isolation through a URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

### TeamsAccountFips <a name="TeamsAccountFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountFips {
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls">Tls</a></code> | <code>interface{}</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tls TeamsAccount#tls}

---

### TeamsAccountLogging <a name="TeamsAccountLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountLogging {
	RedactPii: interface{},
	SettingsByRuleType: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountLoggingSettingsByRuleType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii"></a>

```go
RedactPii interface{}
```

- *Type:* interface{}

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#redact_pii TeamsAccount#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType"></a>

```go
SettingsByRuleType TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

### TeamsAccountLoggingSettingsByRuleType <a name="TeamsAccountLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleType {
	Dns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns,
	Http: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp,
	L4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns"></a>

```go
Dns TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#dns TeamsAccount#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http"></a>

```go
Http TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#http TeamsAccount#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4"></a>

```go
L4 TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#l4 TeamsAccount#l4}

---

### TeamsAccountLoggingSettingsByRuleTypeDns <a name="TeamsAccountLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeDns {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeHttp <a name="TeamsAccountLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeHttp {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeL4 <a name="TeamsAccountLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeL4 {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountProxy <a name="TeamsAccountProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

&teamsaccount.TeamsAccountProxy {
	Tcp: interface{},
	Udp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp">Tcp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp">Udp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp"></a>

```go
Tcp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#tcp TeamsAccount#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp"></a>

```go
Udp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_account#udp TeamsAccount#udp}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsAccountAntivirusOutputReference <a name="TeamsAccountAntivirusOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountAntivirusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountAntivirusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```go
func EnabledDownloadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```go
func EnabledUploadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput"></a>

```go
func FailClosedInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase"></a>

```go
func EnabledDownloadPhase() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase"></a>

```go
func EnabledUploadPhase() interface{}
```

- *Type:* interface{}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed"></a>

```go
func FailClosed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---


### TeamsAccountBlockPageOutputReference <a name="TeamsAccountBlockPageOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountBlockPageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountBlockPageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress">ResetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject">ResetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText"></a>

```go
func ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText"></a>

```go
func ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath"></a>

```go
func ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress"></a>

```go
func ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject"></a>

```go
func ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput"></a>

```go
func FooterTextInput() *string
```

- *Type:* *string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput"></a>

```go
func HeaderTextInput() *string
```

- *Type:* *string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput"></a>

```go
func LogoPathInput() *string
```

- *Type:* *string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput"></a>

```go
func MailtoAddressInput() *string
```

- *Type:* *string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput"></a>

```go
func MailtoSubjectInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText"></a>

```go
func FooterText() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText"></a>

```go
func HeaderText() *string
```

- *Type:* *string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath"></a>

```go
func LogoPath() *string
```

- *Type:* *string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress"></a>

```go
func MailtoAddress() *string
```

- *Type:* *string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject"></a>

```go
func MailtoSubject() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---


### TeamsAccountFipsOutputReference <a name="TeamsAccountFipsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountFipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountFipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---


### TeamsAccountLoggingOutputReference <a name="TeamsAccountLoggingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType"></a>

```go
func PutSettingsByRuleType(value TeamsAccountLoggingSettingsByRuleType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType"></a>

```go
func SettingsByRuleType() TeamsAccountLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput"></a>

```go
func RedactPiiInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```go
func SettingsByRuleTypeInput() TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii"></a>

```go
func RedactPii() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---


### TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---


### TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---


### TeamsAccountLoggingSettingsByRuleTypeL4OutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeL4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeL4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


### TeamsAccountLoggingSettingsByRuleTypeOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```go
func PutDns(value TeamsAccountLoggingSettingsByRuleTypeDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```go
func PutHttp(value TeamsAccountLoggingSettingsByRuleTypeHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```go
func PutL4(value TeamsAccountLoggingSettingsByRuleTypeL4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```go
func Dns() TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```go
func Http() TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```go
func L4() TeamsAccountLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```go
func DnsInput() TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```go
func HttpInput() TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```go
func L4Input() TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


### TeamsAccountProxyOutputReference <a name="TeamsAccountProxyOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v5/teamsaccount"

teamsaccount.NewTeamsAccountProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp">Tcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp">Udp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput"></a>

```go
func TcpInput() interface{}
```

- *Type:* interface{}

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput"></a>

```go
func UdpInput() interface{}
```

- *Type:* interface{}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp"></a>

```go
func Tcp() interface{}
```

- *Type:* interface{}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp"></a>

```go
func Udp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---



