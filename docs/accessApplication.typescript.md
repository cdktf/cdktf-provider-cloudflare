# `accessApplication` Submodule <a name="`accessApplication` Submodule" id="@cdktf/provider-cloudflare.accessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessApplication <a name="AccessApplication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application cloudflare_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplication(scope: Construct, id: string, config?: AccessApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig">AccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig">AccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders">putCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks">putFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign">putLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp">putSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig">putScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria">putTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps">resetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl">resetAppLauncherLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible">resetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor">resetBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders">resetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage">resetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl">resetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl">resetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomainType">resetDomainType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie">resetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks">resetFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor">resetHeaderBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute">resetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign">resetLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl">resetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass">resetOptionsPreflightBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp">resetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute">resetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig">resetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains">resetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect">resetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage">resetSkipAppLauncherLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial">resetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria">resetTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsHeaders` <a name="putCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders"></a>

```typescript
public putCorsHeaders(value: IResolvable | AccessApplicationCorsHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | AccessApplicationDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]

---

##### `putFooterLinks` <a name="putFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks"></a>

```typescript
public putFooterLinks(value: IResolvable | AccessApplicationFooterLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]

---

##### `putLandingPageDesign` <a name="putLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign"></a>

```typescript
public putLandingPageDesign(value: AccessApplicationLandingPageDesign): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `putSaasApp` <a name="putSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp"></a>

```typescript
public putSaasApp(value: AccessApplicationSaasApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `putScimConfig` <a name="putScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig"></a>

```typescript
public putScimConfig(value: AccessApplicationScimConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `putTargetCriteria` <a name="putTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria"></a>

```typescript
public putTargetCriteria(value: IResolvable | AccessApplicationTargetCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp"></a>

```typescript
public resetAllowAuthenticateViaWarp(): void
```

##### `resetAllowedIdps` <a name="resetAllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps"></a>

```typescript
public resetAllowedIdps(): void
```

##### `resetAppLauncherLogoUrl` <a name="resetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl"></a>

```typescript
public resetAppLauncherLogoUrl(): void
```

##### `resetAppLauncherVisible` <a name="resetAppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible"></a>

```typescript
public resetAppLauncherVisible(): void
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity"></a>

```typescript
public resetAutoRedirectToIdentity(): void
```

##### `resetBgColor` <a name="resetBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor"></a>

```typescript
public resetBgColor(): void
```

##### `resetCorsHeaders` <a name="resetCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders"></a>

```typescript
public resetCorsHeaders(): void
```

##### `resetCustomDenyMessage` <a name="resetCustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage"></a>

```typescript
public resetCustomDenyMessage(): void
```

##### `resetCustomDenyUrl` <a name="resetCustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl"></a>

```typescript
public resetCustomDenyUrl(): void
```

##### `resetCustomNonIdentityDenyUrl` <a name="resetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl"></a>

```typescript
public resetCustomNonIdentityDenyUrl(): void
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages"></a>

```typescript
public resetCustomPages(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomainType` <a name="resetDomainType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomainType"></a>

```typescript
public resetDomainType(): void
```

##### `resetEnableBindingCookie` <a name="resetEnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie"></a>

```typescript
public resetEnableBindingCookie(): void
```

##### `resetFooterLinks` <a name="resetFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks"></a>

```typescript
public resetFooterLinks(): void
```

##### `resetHeaderBgColor` <a name="resetHeaderBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor"></a>

```typescript
public resetHeaderBgColor(): void
```

##### `resetHttpOnlyCookieAttribute` <a name="resetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute"></a>

```typescript
public resetHttpOnlyCookieAttribute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLandingPageDesign` <a name="resetLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign"></a>

```typescript
public resetLandingPageDesign(): void
```

##### `resetLogoUrl` <a name="resetLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl"></a>

```typescript
public resetLogoUrl(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptionsPreflightBypass` <a name="resetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass"></a>

```typescript
public resetOptionsPreflightBypass(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetSaasApp` <a name="resetSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp"></a>

```typescript
public resetSaasApp(): void
```

##### `resetSameSiteCookieAttribute` <a name="resetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute"></a>

```typescript
public resetSameSiteCookieAttribute(): void
```

##### `resetScimConfig` <a name="resetScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig"></a>

```typescript
public resetScimConfig(): void
```

##### `resetSelfHostedDomains` <a name="resetSelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains"></a>

```typescript
public resetSelfHostedDomains(): void
```

##### `resetServiceAuth401Redirect` <a name="resetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect"></a>

```typescript
public resetServiceAuth401Redirect(): void
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration"></a>

```typescript
public resetSessionDuration(): void
```

##### `resetSkipAppLauncherLoginPage` <a name="resetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage"></a>

```typescript
public resetSkipAppLauncherLoginPage(): void
```

##### `resetSkipInterstitial` <a name="resetSkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial"></a>

```typescript
public resetSkipInterstitial(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetCriteria` <a name="resetTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria"></a>

```typescript
public resetTargetCriteria(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType"></a>

```typescript
public resetType(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

accessApplication.AccessApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

accessApplication.AccessApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

accessApplication.AccessApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

accessApplication.AccessApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud">aud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders">corsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList">AccessApplicationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks">footerLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria">targetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput">allowedIdpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput">appLauncherLogoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput">appLauncherVisibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput">bgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput">corsHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput">customDenyMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput">customDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput">customNonIdentityDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput">customPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainTypeInput">domainTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput">enableBindingCookieInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput">footerLinksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput">headerBgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput">httpOnlyCookieAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput">landingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput">logoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput">optionsPreflightBypassInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput">saasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput">sameSiteCookieAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput">scimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput">selfHostedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput">serviceAuth401RedirectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput">sessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput">skipAppLauncherLoginPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput">skipInterstitialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput">targetCriteriaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps">allowedIdps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible">appLauncherVisible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor">bgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage">customDenyMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl">customDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages">customPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainType">domainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie">enableBindingCookie</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor">headerBgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains">selfHostedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial">skipInterstitial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud"></a>

```typescript
public readonly aud: string;
```

- *Type:* string

---

##### `corsHeaders`<sup>Required</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders"></a>

```typescript
public readonly corsHeaders: AccessApplicationCorsHeadersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.destinations"></a>

```typescript
public readonly destinations: AccessApplicationDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList">AccessApplicationDestinationsList</a>

---

##### `footerLinks`<sup>Required</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks"></a>

```typescript
public readonly footerLinks: AccessApplicationFooterLinksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a>

---

##### `landingPageDesign`<sup>Required</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign"></a>

```typescript
public readonly landingPageDesign: AccessApplicationLandingPageDesignOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a>

---

##### `saasApp`<sup>Required</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp"></a>

```typescript
public readonly saasApp: AccessApplicationSaasAppOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a>

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig"></a>

```typescript
public readonly scimConfig: AccessApplicationScimConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a>

---

##### `targetCriteria`<sup>Required</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria"></a>

```typescript
public readonly targetCriteria: AccessApplicationTargetCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput"></a>

```typescript
public readonly allowAuthenticateViaWarpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedIdpsInput`<sup>Optional</sup> <a name="allowedIdpsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput"></a>

```typescript
public readonly allowedIdpsInput: string[];
```

- *Type:* string[]

---

##### `appLauncherLogoUrlInput`<sup>Optional</sup> <a name="appLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput"></a>

```typescript
public readonly appLauncherLogoUrlInput: string;
```

- *Type:* string

---

##### `appLauncherVisibleInput`<sup>Optional</sup> <a name="appLauncherVisibleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput"></a>

```typescript
public readonly appLauncherVisibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput"></a>

```typescript
public readonly autoRedirectToIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgColorInput`<sup>Optional</sup> <a name="bgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput"></a>

```typescript
public readonly bgColorInput: string;
```

- *Type:* string

---

##### `corsHeadersInput`<sup>Optional</sup> <a name="corsHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput"></a>

```typescript
public readonly corsHeadersInput: IResolvable | AccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]

---

##### `customDenyMessageInput`<sup>Optional</sup> <a name="customDenyMessageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput"></a>

```typescript
public readonly customDenyMessageInput: string;
```

- *Type:* string

---

##### `customDenyUrlInput`<sup>Optional</sup> <a name="customDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput"></a>

```typescript
public readonly customDenyUrlInput: string;
```

- *Type:* string

---

##### `customNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="customNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput"></a>

```typescript
public readonly customNonIdentityDenyUrlInput: string;
```

- *Type:* string

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput"></a>

```typescript
public readonly customPagesInput: string[];
```

- *Type:* string[]

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | AccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainTypeInput`<sup>Optional</sup> <a name="domainTypeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainTypeInput"></a>

```typescript
public readonly domainTypeInput: string;
```

- *Type:* string

---

##### `enableBindingCookieInput`<sup>Optional</sup> <a name="enableBindingCookieInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput"></a>

```typescript
public readonly enableBindingCookieInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerLinksInput`<sup>Optional</sup> <a name="footerLinksInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput"></a>

```typescript
public readonly footerLinksInput: IResolvable | AccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]

---

##### `headerBgColorInput`<sup>Optional</sup> <a name="headerBgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput"></a>

```typescript
public readonly headerBgColorInput: string;
```

- *Type:* string

---

##### `httpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="httpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput"></a>

```typescript
public readonly httpOnlyCookieAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `landingPageDesignInput`<sup>Optional</sup> <a name="landingPageDesignInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput"></a>

```typescript
public readonly landingPageDesignInput: AccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `logoUrlInput`<sup>Optional</sup> <a name="logoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput"></a>

```typescript
public readonly logoUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsPreflightBypassInput`<sup>Optional</sup> <a name="optionsPreflightBypassInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput"></a>

```typescript
public readonly optionsPreflightBypassInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `saasAppInput`<sup>Optional</sup> <a name="saasAppInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput"></a>

```typescript
public readonly saasAppInput: AccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `sameSiteCookieAttributeInput`<sup>Optional</sup> <a name="sameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput"></a>

```typescript
public readonly sameSiteCookieAttributeInput: string;
```

- *Type:* string

---

##### `scimConfigInput`<sup>Optional</sup> <a name="scimConfigInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput"></a>

```typescript
public readonly scimConfigInput: AccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `selfHostedDomainsInput`<sup>Optional</sup> <a name="selfHostedDomainsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput"></a>

```typescript
public readonly selfHostedDomainsInput: string[];
```

- *Type:* string[]

---

##### `serviceAuth401RedirectInput`<sup>Optional</sup> <a name="serviceAuth401RedirectInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput"></a>

```typescript
public readonly serviceAuth401RedirectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput"></a>

```typescript
public readonly sessionDurationInput: string;
```

- *Type:* string

---

##### `skipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="skipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput"></a>

```typescript
public readonly skipAppLauncherLoginPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInterstitialInput`<sup>Optional</sup> <a name="skipInterstitialInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput"></a>

```typescript
public readonly skipInterstitialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `targetCriteriaInput`<sup>Optional</sup> <a name="targetCriteriaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput"></a>

```typescript
public readonly targetCriteriaInput: IResolvable | AccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedIdps`<sup>Required</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps"></a>

```typescript
public readonly allowedIdps: string[];
```

- *Type:* string[]

---

##### `appLauncherLogoUrl`<sup>Required</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl"></a>

```typescript
public readonly appLauncherLogoUrl: string;
```

- *Type:* string

---

##### `appLauncherVisible`<sup>Required</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible"></a>

```typescript
public readonly appLauncherVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgColor`<sup>Required</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor"></a>

```typescript
public readonly bgColor: string;
```

- *Type:* string

---

##### `customDenyMessage`<sup>Required</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage"></a>

```typescript
public readonly customDenyMessage: string;
```

- *Type:* string

---

##### `customDenyUrl`<sup>Required</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl"></a>

```typescript
public readonly customDenyUrl: string;
```

- *Type:* string

---

##### `customNonIdentityDenyUrl`<sup>Required</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl"></a>

```typescript
public readonly customNonIdentityDenyUrl: string;
```

- *Type:* string

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages"></a>

```typescript
public readonly customPages: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

---

##### `enableBindingCookie`<sup>Required</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie"></a>

```typescript
public readonly enableBindingCookie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerBgColor`<sup>Required</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor"></a>

```typescript
public readonly headerBgColor: string;
```

- *Type:* string

---

##### `httpOnlyCookieAttribute`<sup>Required</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute"></a>

```typescript
public readonly httpOnlyCookieAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optionsPreflightBypass`<sup>Required</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass"></a>

```typescript
public readonly optionsPreflightBypass: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `sameSiteCookieAttribute`<sup>Required</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute"></a>

```typescript
public readonly sameSiteCookieAttribute: string;
```

- *Type:* string

---

##### `selfHostedDomains`<sup>Required</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains"></a>

```typescript
public readonly selfHostedDomains: string[];
```

- *Type:* string[]

---

##### `serviceAuth401Redirect`<sup>Required</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect"></a>

```typescript
public readonly serviceAuth401Redirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

---

##### `skipAppLauncherLoginPage`<sup>Required</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage"></a>

```typescript
public readonly skipAppLauncherLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInterstitial`<sup>Required</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial"></a>

```typescript
public readonly skipInterstitial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessApplicationConfig <a name="AccessApplicationConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationConfig: accessApplication.AccessApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps">allowedIdps</a></code> | <code>string[]</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>string</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible">appLauncherVisible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor">bgColor</a></code> | <code>string</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders">corsHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage">customDenyMessage</a></code> | <code>string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl">customDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages">customPages</a></code> | <code>string[]</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain">domain</a></code> | <code>string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domainType">domainType</a></code> | <code>string</code> | The type of the primary domain. Available values: `public`, `private`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie">enableBindingCookie</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks">footerLinks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]</code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor">headerBgColor</a></code> | <code>string</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl">logoUrl</a></code> | <code>string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name">name</a></code> | <code>string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies">policies</a></code> | <code>string[]</code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains">selfHostedDomains</a></code> | <code>string[]</code> | List of public domains secured by Access. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial">skipInterstitial</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags">tags</a></code> | <code>string[]</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria">targetCriteria</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]</code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type">type</a></code> | <code>string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```typescript
public readonly allowAuthenticateViaWarp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_authenticate_via_warp AccessApplication#allow_authenticate_via_warp}

---

##### `allowedIdps`<sup>Optional</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps"></a>

```typescript
public readonly allowedIdps: string[];
```

- *Type:* string[]

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `appLauncherLogoUrl`<sup>Optional</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl"></a>

```typescript
public readonly appLauncherLogoUrl: string;
```

- *Type:* string

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#app_launcher_logo_url AccessApplication#app_launcher_logo_url}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible"></a>

```typescript
public readonly appLauncherVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity"></a>

```typescript
public readonly autoRedirectToIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `bgColor`<sup>Optional</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor"></a>

```typescript
public readonly bgColor: string;
```

- *Type:* string

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#bg_color AccessApplication#bg_color}

---

##### `corsHeaders`<sup>Optional</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders"></a>

```typescript
public readonly corsHeaders: IResolvable | AccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `customDenyMessage`<sup>Optional</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage"></a>

```typescript
public readonly customDenyMessage: string;
```

- *Type:* string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `customDenyUrl`<sup>Optional</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl"></a>

```typescript
public readonly customDenyUrl: string;
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `customNonIdentityDenyUrl`<sup>Optional</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```typescript
public readonly customNonIdentityDenyUrl: string;
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages"></a>

```typescript
public readonly customPages: string[];
```

- *Type:* string[]

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | AccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#destinations AccessApplication#destinations}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `domainType`<sup>Optional</sup> <a name="domainType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

The type of the primary domain. Available values: `public`, `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#domain_type AccessApplication#domain_type}

---

##### `enableBindingCookie`<sup>Optional</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie"></a>

```typescript
public readonly enableBindingCookie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `footerLinks`<sup>Optional</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks"></a>

```typescript
public readonly footerLinks: IResolvable | AccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#footer_links AccessApplication#footer_links}

---

##### `headerBgColor`<sup>Optional</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor"></a>

```typescript
public readonly headerBgColor: string;
```

- *Type:* string

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#header_bg_color AccessApplication#header_bg_color}

---

##### `httpOnlyCookieAttribute`<sup>Optional</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```typescript
public readonly httpOnlyCookieAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `landingPageDesign`<sup>Optional</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign"></a>

```typescript
public readonly landingPageDesign: AccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#landing_page_design AccessApplication#landing_page_design}

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `optionsPreflightBypass`<sup>Optional</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass"></a>

```typescript
public readonly optionsPreflightBypass: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#options_preflight_bypass AccessApplication#options_preflight_bypass}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#policies AccessApplication#policies}

---

##### `saasApp`<sup>Optional</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp"></a>

```typescript
public readonly saasApp: AccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `sameSiteCookieAttribute`<sup>Optional</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```typescript
public readonly sameSiteCookieAttribute: string;
```

- *Type:* string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig"></a>

```typescript
public readonly scimConfig: AccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#scim_config AccessApplication#scim_config}

---

##### `selfHostedDomains`<sup>Optional</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains"></a>

```typescript
public readonly selfHostedDomains: string[];
```

- *Type:* string[]

List of public domains secured by Access.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`. Deprecated in favor of `destinations` and will be removed in the next major version. Conflicts with `destinations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}

---

##### `serviceAuth401Redirect`<sup>Optional</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect"></a>

```typescript
public readonly serviceAuth401Redirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `skipAppLauncherLoginPage`<sup>Optional</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```typescript
public readonly skipAppLauncherLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#skip_app_launcher_login_page AccessApplication#skip_app_launcher_login_page}

---

##### `skipInterstitial`<sup>Optional</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial"></a>

```typescript
public readonly skipInterstitial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#tags AccessApplication#tags}

---

##### `targetCriteria`<sup>Optional</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria"></a>

```typescript
public readonly targetCriteria: IResolvable | AccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#target_criteria AccessApplication#target_criteria}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#type AccessApplication#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

### AccessApplicationCorsHeaders <a name="AccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationCorsHeaders: accessApplication.AccessApplicationCorsHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders">allowAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods">allowAllMethods</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins">allowAllOrigins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge">maxAge</a></code> | <code>number</code> | The maximum time a preflight request will be cached. |

---

##### `allowAllHeaders`<sup>Optional</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```typescript
public readonly allowAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}

---

##### `allowAllMethods`<sup>Optional</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods"></a>

```typescript
public readonly allowAllMethods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}

---

##### `allowAllOrigins`<sup>Optional</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```typescript
public readonly allowAllOrigins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#max_age AccessApplication#max_age}

---

### AccessApplicationDestinations <a name="AccessApplicationDestinations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationDestinations: accessApplication.AccessApplicationDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations.property.uri">uri</a></code> | <code>string</code> | The URI of the destination. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations.property.type">type</a></code> | <code>string</code> | The destination type. Available values: `public`, `private`. Defaults to `public`. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the destination.

Public destinations can include a domain and path with wildcards. Private destinations are an early access feature and gated behind a feature flag. Private destinations support private IPv4, IPv6, and Server Name Indications (SNI) with optional port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#uri AccessApplication#uri}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The destination type. Available values: `public`, `private`. Defaults to `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#type AccessApplication#type}

---

### AccessApplicationFooterLinks <a name="AccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationFooterLinks: accessApplication.AccessApplicationFooterLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name">name</a></code> | <code>string</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url">url</a></code> | <code>string</code> | The URL of the footer link. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#url AccessApplication#url}

---

### AccessApplicationLandingPageDesign <a name="AccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationLandingPageDesign: accessApplication.AccessApplicationLandingPageDesign = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor">buttonColor</a></code> | <code>string</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor">buttonTextColor</a></code> | <code>string</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl">imageUrl</a></code> | <code>string</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message">message</a></code> | <code>string</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title">title</a></code> | <code>string</code> | The title of the landing page. |

---

##### `buttonColor`<sup>Optional</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor"></a>

```typescript
public readonly buttonColor: string;
```

- *Type:* string

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#button_color AccessApplication#button_color}

---

##### `buttonTextColor`<sup>Optional</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```typescript
public readonly buttonTextColor: string;
```

- *Type:* string

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#button_text_color AccessApplication#button_text_color}

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#image_url AccessApplication#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#message AccessApplication#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#title AccessApplication#title}

---

### AccessApplicationSaasApp <a name="AccessApplicationSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasApp: accessApplication.AccessApplicationSaasApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>string</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl">appLauncherUrl</a></code> | <code>string</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType">authType</a></code> | <code>string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute">customAttribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim">customClaim</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]</code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex">groupFilterRegex</a></code> | <code>string</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes">scopes</a></code> | <code>string[]</code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId">spEntityId</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |

---

##### `accessTokenLifetime`<sup>Optional</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime"></a>

```typescript
public readonly accessTokenLifetime: string;
```

- *Type:* string

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#access_token_lifetime AccessApplication#access_token_lifetime}

---

##### `allowPkceWithoutClientSecret`<sup>Optional</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```typescript
public readonly allowPkceWithoutClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#allow_pkce_without_client_secret AccessApplication#allow_pkce_without_client_secret}

---

##### `appLauncherUrl`<sup>Optional</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl"></a>

```typescript
public readonly appLauncherUrl: string;
```

- *Type:* string

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#app_launcher_url AccessApplication#app_launcher_url}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#auth_type AccessApplication#auth_type}

---

##### `consumerServiceUrl`<sup>Optional</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl"></a>

```typescript
public readonly consumerServiceUrl: string;
```

- *Type:* string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

##### `customAttribute`<sup>Optional</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute"></a>

```typescript
public readonly customAttribute: IResolvable | AccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_attribute AccessApplication#custom_attribute}

---

##### `customClaim`<sup>Optional</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim"></a>

```typescript
public readonly customClaim: IResolvable | AccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#custom_claim AccessApplication#custom_claim}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#default_relay_state AccessApplication#default_relay_state}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#grant_types AccessApplication#grant_types}

---

##### `groupFilterRegex`<sup>Optional</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex"></a>

```typescript
public readonly groupFilterRegex: string;
```

- *Type:* string

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#group_filter_regex AccessApplication#group_filter_regex}

---

##### `hybridAndImplicitOptions`<sup>Optional</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```typescript
public readonly hybridAndImplicitOptions: AccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#hybrid_and_implicit_options AccessApplication#hybrid_and_implicit_options}

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

##### `nameIdTransformJsonata`<sup>Optional</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```typescript
public readonly nameIdTransformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name_id_transform_jsonata AccessApplication#name_id_transform_jsonata}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#redirect_uris AccessApplication#redirect_uris}

---

##### `refreshTokenOptions`<sup>Optional</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions"></a>

```typescript
public readonly refreshTokenOptions: IResolvable | AccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#refresh_token_options AccessApplication#refresh_token_options}

---

##### `samlAttributeTransformJsonata`<sup>Optional</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```typescript
public readonly samlAttributeTransformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#saml_attribute_transform_jsonata AccessApplication#saml_attribute_transform_jsonata}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

### AccessApplicationSaasAppCustomAttribute <a name="AccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppCustomAttribute: accessApplication.AccessApplicationSaasAppCustomAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName">friendlyName</a></code> | <code>string</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat">nameFormat</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the attribute must be always present. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source"></a>

```typescript
public readonly source: AccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#source AccessApplication#source}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#friendly_name AccessApplication#friendly_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name_format AccessApplication#name_format}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#required AccessApplication#required}

---

### AccessApplicationSaasAppCustomAttributeSource <a name="AccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppCustomAttributeSource: accessApplication.AccessApplicationSaasAppCustomAttributeSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppCustomClaim <a name="AccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppCustomClaim: accessApplication.AccessApplicationSaasAppCustomClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope">scope</a></code> | <code>string</code> | The scope of the claim. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source"></a>

```typescript
public readonly source: AccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#source AccessApplication#source}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#required AccessApplication#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#scope AccessApplication#scope}

---

### AccessApplicationSaasAppCustomClaimSource <a name="AccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppCustomClaimSource: accessApplication.AccessApplicationSaasAppCustomClaimSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name">name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppHybridAndImplicitOptions <a name="AccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppHybridAndImplicitOptions: accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the authorization endpoint will return an id token. |

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#return_access_token_from_authorization_endpoint AccessApplication#return_access_token_from_authorization_endpoint}

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#return_id_token_from_authorization_endpoint AccessApplication#return_id_token_from_authorization_endpoint}

---

### AccessApplicationSaasAppRefreshTokenOptions <a name="AccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationSaasAppRefreshTokenOptions: accessApplication.AccessApplicationSaasAppRefreshTokenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime">lifetime</a></code> | <code>string</code> | How long a refresh token will be valid for after creation. |

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#lifetime AccessApplication#lifetime}

---

### AccessApplicationScimConfig <a name="AccessApplicationScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationScimConfig: accessApplication.AccessApplicationScimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid">idpUid</a></code> | <code>string</code> | The UIDs of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri">remoteUri</a></code> | <code>string</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication">authentication</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]</code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings">mappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]</code> | mappings block. |

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid"></a>

```typescript
public readonly idpUid: string;
```

- *Type:* string

The UIDs of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#idp_uid AccessApplication#idp_uid}

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#remote_uri AccessApplication#remote_uri}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | AccessApplicationScimConfigAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#authentication AccessApplication#authentication}

---

##### `deactivateOnDelete`<sup>Optional</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete"></a>

```typescript
public readonly deactivateOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#deactivate_on_delete AccessApplication#deactivate_on_delete}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings"></a>

```typescript
public readonly mappings: IResolvable | AccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#mappings AccessApplication#mappings}

---

### AccessApplicationScimConfigAuthentication <a name="AccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationScimConfigAuthentication: accessApplication.AccessApplicationScimConfigAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme">scheme</a></code> | <code>string</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId">clientId</a></code> | <code>string</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret">clientSecret</a></code> | <code>string</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#password AccessApplication#password}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes">scopes</a></code> | <code>string[]</code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token">token</a></code> | <code>string</code> | Token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user">user</a></code> | <code>string</code> | User name used to authenticate with the remote SCIM service. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#scheme AccessApplication#scheme}

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

URL used to generate the auth code used during token generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#authorization_url AccessApplication#authorization_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#client_id AccessApplication#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#client_secret AccessApplication#client_secret}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#password AccessApplication#password}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#token AccessApplication#token}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

URL used to generate the token used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#token_url AccessApplication#token_url}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User name used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#user AccessApplication#user}

---

### AccessApplicationScimConfigMappings <a name="AccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationScimConfigMappings: accessApplication.AccessApplicationScimConfigMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema">schema</a></code> | <code>string</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter">filter</a></code> | <code>string</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.strictness">strictness</a></code> | <code>string</code> | How strictly to adhere to outbound resource schemas when provisioning to this mapping. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata">transformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#schema AccessApplication#schema}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#filter AccessApplication#filter}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations"></a>

```typescript
public readonly operations: AccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#operations AccessApplication#operations}

---

##### `strictness`<sup>Optional</sup> <a name="strictness" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.strictness"></a>

```typescript
public readonly strictness: string;
```

- *Type:* string

How strictly to adhere to outbound resource schemas when provisioning to this mapping.

"strict" will remove unknown values when provisioning, while "passthrough" will pass unknown values to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#strictness AccessApplication#strictness}

---

##### `transformJsonata`<sup>Optional</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata"></a>

```typescript
public readonly transformJsonata: string;
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#transform_jsonata AccessApplication#transform_jsonata}

---

### AccessApplicationScimConfigMappingsOperations <a name="AccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationScimConfigMappingsOperations: accessApplication.AccessApplicationScimConfigMappingsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#create AccessApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#delete AccessApplication#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#update AccessApplication#update}

---

### AccessApplicationTargetCriteria <a name="AccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationTargetCriteria: accessApplication.AccessApplicationTargetCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port">port</a></code> | <code>number</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol">protocol</a></code> | <code>string</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes">targetAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | target_attributes block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#port AccessApplication#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#protocol AccessApplication#protocol}

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes"></a>

```typescript
public readonly targetAttributes: IResolvable | AccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#target_attributes AccessApplication#target_attributes}

---

### AccessApplicationTargetCriteriaTargetAttributes <a name="AccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

const accessApplicationTargetCriteriaTargetAttributes: accessApplication.AccessApplicationTargetCriteriaTargetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name">name</a></code> | <code>string</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values">values</a></code> | <code>string[]</code> | The values of the attribute. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#name AccessApplication#name}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/access_application#values AccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessApplicationCorsHeadersList <a name="AccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationCorsHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get"></a>

```typescript
public get(index: number): AccessApplicationCorsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationCorsHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>[]

---


### AccessApplicationCorsHeadersOutputReference <a name="AccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationCorsHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">resetAllowAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">resetAllowAllMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">resetAllowAllOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllHeaders` <a name="resetAllowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```typescript
public resetAllowAllHeaders(): void
```

##### `resetAllowAllMethods` <a name="resetAllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```typescript
public resetAllowAllMethods(): void
```

##### `resetAllowAllOrigins` <a name="resetAllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```typescript
public resetAllowAllOrigins(): void
```

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">allowAllHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">allowAllMethodsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">allowAllOriginsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">allowAllHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods">allowAllMethods</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">allowAllOrigins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAllHeadersInput`<sup>Optional</sup> <a name="allowAllHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```typescript
public readonly allowAllHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllMethodsInput`<sup>Optional</sup> <a name="allowAllMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```typescript
public readonly allowAllMethodsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllOriginsInput`<sup>Optional</sup> <a name="allowAllOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```typescript
public readonly allowAllOriginsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `allowAllHeaders`<sup>Required</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```typescript
public readonly allowAllHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllMethods`<sup>Required</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```typescript
public readonly allowAllMethods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAllOrigins`<sup>Required</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```typescript
public readonly allowAllOrigins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationCorsHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>

---


### AccessApplicationDestinationsList <a name="AccessApplicationDestinationsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.get"></a>

```typescript
public get(index: number): AccessApplicationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>[]

---


### AccessApplicationDestinationsOutputReference <a name="AccessApplicationDestinationsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationDestinations">AccessApplicationDestinations</a>

---


### AccessApplicationFooterLinksList <a name="AccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationFooterLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get"></a>

```typescript
public get(index: number): AccessApplicationFooterLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationFooterLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>[]

---


### AccessApplicationFooterLinksOutputReference <a name="AccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationFooterLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationFooterLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>

---


### AccessApplicationLandingPageDesignOutputReference <a name="AccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationLandingPageDesignOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor">resetButtonColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor">resetButtonTextColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonColor` <a name="resetButtonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```typescript
public resetButtonColor(): void
```

##### `resetButtonTextColor` <a name="resetButtonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```typescript
public resetButtonTextColor(): void
```

##### `resetImageUrl` <a name="resetImageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```typescript
public resetImageUrl(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">buttonColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">buttonTextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor">buttonColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">buttonTextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonColorInput`<sup>Optional</sup> <a name="buttonColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```typescript
public readonly buttonColorInput: string;
```

- *Type:* string

---

##### `buttonTextColorInput`<sup>Optional</sup> <a name="buttonTextColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```typescript
public readonly buttonTextColorInput: string;
```

- *Type:* string

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `buttonColor`<sup>Required</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```typescript
public readonly buttonColor: string;
```

- *Type:* string

---

##### `buttonTextColor`<sup>Required</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```typescript
public readonly buttonTextColor: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationLandingPageDesign;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---


### AccessApplicationSaasAppCustomAttributeList <a name="AccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get"></a>

```typescript
public get(index: number): AccessApplicationSaasAppCustomAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]

---


### AccessApplicationSaasAppCustomAttributeOutputReference <a name="AccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat">resetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```typescript
public putSource(value: AccessApplicationSaasAppCustomAttributeSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameFormat` <a name="resetNameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```typescript
public resetNameFormat(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">nameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">nameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```typescript
public readonly source: AccessApplicationSaasAppCustomAttributeSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `nameFormatInput`<sup>Optional</sup> <a name="nameFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```typescript
public readonly nameFormatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: AccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameFormat`<sup>Required</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppCustomAttribute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>

---


### AccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="AccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```typescript
public resetNameByIdp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```typescript
public readonly nameByIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationSaasAppCustomAttributeSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---


### AccessApplicationSaasAppCustomClaimList <a name="AccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get"></a>

```typescript
public get(index: number): AccessApplicationSaasAppCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]

---


### AccessApplicationSaasAppCustomClaimOutputReference <a name="AccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```typescript
public putSource(value: AccessApplicationSaasAppCustomClaimSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```typescript
public readonly source: AccessApplicationSaasAppCustomClaimSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: AccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppCustomClaim;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>

---


### AccessApplicationSaasAppCustomClaimSourceOutputReference <a name="AccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```typescript
public resetNameByIdp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```typescript
public readonly nameByIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```typescript
public readonly nameByIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationSaasAppCustomClaimSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---


### AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint">resetReturnAccessTokenFromAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint">resetReturnIdTokenFromAuthorizationEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReturnAccessTokenFromAuthorizationEndpoint` <a name="resetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public resetReturnAccessTokenFromAuthorizationEndpoint(): void
```

##### `resetReturnIdTokenFromAuthorizationEndpoint` <a name="resetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public resetReturnIdTokenFromAuthorizationEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">returnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">returnIdTokenFromAuthorizationEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `returnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnAccessTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```typescript
public readonly returnIdTokenFromAuthorizationEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### AccessApplicationSaasAppOutputReference <a name="AccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute">putCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim">putCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions">putHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions">putRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime">resetAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret">resetAllowPkceWithoutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl">resetAppLauncherUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl">resetConsumerServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute">resetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim">resetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex">resetGroupFilterRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions">resetHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat">resetNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata">resetNameIdTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions">resetRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata">resetSamlAttributeTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttribute` <a name="putCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```typescript
public putCustomAttribute(value: IResolvable | AccessApplicationSaasAppCustomAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]

---

##### `putCustomClaim` <a name="putCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```typescript
public putCustomClaim(value: IResolvable | AccessApplicationSaasAppCustomClaim[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]

---

##### `putHybridAndImplicitOptions` <a name="putHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```typescript
public putHybridAndImplicitOptions(value: AccessApplicationSaasAppHybridAndImplicitOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `putRefreshTokenOptions` <a name="putRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```typescript
public putRefreshTokenOptions(value: IResolvable | AccessApplicationSaasAppRefreshTokenOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]

---

##### `resetAccessTokenLifetime` <a name="resetAccessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```typescript
public resetAccessTokenLifetime(): void
```

##### `resetAllowPkceWithoutClientSecret` <a name="resetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```typescript
public resetAllowPkceWithoutClientSecret(): void
```

##### `resetAppLauncherUrl` <a name="resetAppLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```typescript
public resetAppLauncherUrl(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConsumerServiceUrl` <a name="resetConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```typescript
public resetConsumerServiceUrl(): void
```

##### `resetCustomAttribute` <a name="resetCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```typescript
public resetCustomAttribute(): void
```

##### `resetCustomClaim` <a name="resetCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```typescript
public resetCustomClaim(): void
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```typescript
public resetDefaultRelayState(): void
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```typescript
public resetGrantTypes(): void
```

##### `resetGroupFilterRegex` <a name="resetGroupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```typescript
public resetGroupFilterRegex(): void
```

##### `resetHybridAndImplicitOptions` <a name="resetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```typescript
public resetHybridAndImplicitOptions(): void
```

##### `resetNameIdFormat` <a name="resetNameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```typescript
public resetNameIdFormat(): void
```

##### `resetNameIdTransformJsonata` <a name="resetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```typescript
public resetNameIdTransformJsonata(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```

##### `resetRefreshTokenOptions` <a name="resetRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```typescript
public resetRefreshTokenOptions(): void
```

##### `resetSamlAttributeTransformJsonata` <a name="resetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```typescript
public resetSamlAttributeTransformJsonata(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```typescript
public resetSpEntityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute">customAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim">customClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint">ssoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">accessTokenLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">allowPkceWithoutClientSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">appLauncherUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">consumerServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput">customAttributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput">customClaimInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput">grantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">groupFilterRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">hybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput">nameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">nameIdTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">refreshTokenOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">samlAttributeTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl">appLauncherUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex">groupFilterRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat">nameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId">spEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `customAttribute`<sup>Required</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```typescript
public readonly customAttribute: AccessApplicationSaasAppCustomAttributeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a>

---

##### `customClaim`<sup>Required</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim"></a>

```typescript
public readonly customClaim: AccessApplicationSaasAppCustomClaimList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a>

---

##### `hybridAndImplicitOptions`<sup>Required</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```typescript
public readonly hybridAndImplicitOptions: AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `refreshTokenOptions`<sup>Required</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```typescript
public readonly refreshTokenOptions: AccessApplicationSaasAppRefreshTokenOptionsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `ssoEndpoint`<sup>Required</sup> <a name="ssoEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```typescript
public readonly ssoEndpoint: string;
```

- *Type:* string

---

##### `accessTokenLifetimeInput`<sup>Optional</sup> <a name="accessTokenLifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```typescript
public readonly accessTokenLifetimeInput: string;
```

- *Type:* string

---

##### `allowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="allowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```typescript
public readonly allowPkceWithoutClientSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appLauncherUrlInput`<sup>Optional</sup> <a name="appLauncherUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```typescript
public readonly appLauncherUrlInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `consumerServiceUrlInput`<sup>Optional</sup> <a name="consumerServiceUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```typescript
public readonly consumerServiceUrlInput: string;
```

- *Type:* string

---

##### `customAttributeInput`<sup>Optional</sup> <a name="customAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```typescript
public readonly customAttributeInput: IResolvable | AccessApplicationSaasAppCustomAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>[]

---

##### `customClaimInput`<sup>Optional</sup> <a name="customClaimInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```typescript
public readonly customClaimInput: IResolvable | AccessApplicationSaasAppCustomClaim[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>[]

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```typescript
public readonly defaultRelayStateInput: string;
```

- *Type:* string

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```typescript
public readonly grantTypesInput: string[];
```

- *Type:* string[]

---

##### `groupFilterRegexInput`<sup>Optional</sup> <a name="groupFilterRegexInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```typescript
public readonly groupFilterRegexInput: string;
```

- *Type:* string

---

##### `hybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="hybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```typescript
public readonly hybridAndImplicitOptionsInput: AccessApplicationSaasAppHybridAndImplicitOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `nameIdFormatInput`<sup>Optional</sup> <a name="nameIdFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```typescript
public readonly nameIdFormatInput: string;
```

- *Type:* string

---

##### `nameIdTransformJsonataInput`<sup>Optional</sup> <a name="nameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```typescript
public readonly nameIdTransformJsonataInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenOptionsInput`<sup>Optional</sup> <a name="refreshTokenOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```typescript
public readonly refreshTokenOptionsInput: IResolvable | AccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]

---

##### `samlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="samlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```typescript
public readonly samlAttributeTransformJsonataInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```typescript
public readonly spEntityIdInput: string;
```

- *Type:* string

---

##### `accessTokenLifetime`<sup>Required</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```typescript
public readonly accessTokenLifetime: string;
```

- *Type:* string

---

##### `allowPkceWithoutClientSecret`<sup>Required</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```typescript
public readonly allowPkceWithoutClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appLauncherUrl`<sup>Required</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```typescript
public readonly appLauncherUrl: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `consumerServiceUrl`<sup>Required</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```typescript
public readonly consumerServiceUrl: string;
```

- *Type:* string

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `groupFilterRegex`<sup>Required</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```typescript
public readonly groupFilterRegex: string;
```

- *Type:* string

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```typescript
public readonly nameIdFormat: string;
```

- *Type:* string

---

##### `nameIdTransformJsonata`<sup>Required</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```typescript
public readonly nameIdTransformJsonata: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `samlAttributeTransformJsonata`<sup>Required</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```typescript
public readonly samlAttributeTransformJsonata: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationSaasApp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---


### AccessApplicationSaasAppRefreshTokenOptionsList <a name="AccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```typescript
public get(index: number): AccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppRefreshTokenOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>[]

---


### AccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="AccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationSaasAppRefreshTokenOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>

---


### AccessApplicationScimConfigAuthenticationList <a name="AccessApplicationScimConfigAuthenticationList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.get"></a>

```typescript
public get(index: number): AccessApplicationScimConfigAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationScimConfigAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]

---


### AccessApplicationScimConfigAuthenticationOutputReference <a name="AccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```typescript
public resetAuthorizationUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationScimConfigAuthentication;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---


### AccessApplicationScimConfigMappingsList <a name="AccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get"></a>

```typescript
public get(index: number): AccessApplicationScimConfigMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]

---


### AccessApplicationScimConfigMappingsOperationsOutputReference <a name="AccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">createInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create">create</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---


### AccessApplicationScimConfigMappingsOutputReference <a name="AccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetStrictness">resetStrictness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">resetTransformJsonata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```typescript
public putOperations(value: AccessApplicationScimConfigMappingsOperations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetStrictness` <a name="resetStrictness" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetStrictness"></a>

```typescript
public resetStrictness(): void
```

##### `resetTransformJsonata` <a name="resetTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```typescript
public resetTransformJsonata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput">operationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.strictnessInput">strictnessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">transformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.strictness">strictness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">transformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```typescript
public readonly operations: AccessApplicationScimConfigMappingsOperationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: AccessApplicationScimConfigMappingsOperations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `strictnessInput`<sup>Optional</sup> <a name="strictnessInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.strictnessInput"></a>

```typescript
public readonly strictnessInput: string;
```

- *Type:* string

---

##### `transformJsonataInput`<sup>Optional</sup> <a name="transformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```typescript
public readonly transformJsonataInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `strictness`<sup>Required</sup> <a name="strictness" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.strictness"></a>

```typescript
public readonly strictness: string;
```

- *Type:* string

---

##### `transformJsonata`<sup>Required</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```typescript
public readonly transformJsonata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationScimConfigMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>

---


### AccessApplicationScimConfigOutputReference <a name="AccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationScimConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings">putMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete">resetDeactivateOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings">resetMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | AccessApplicationScimConfigAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]

---

##### `putMappings` <a name="putMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings"></a>

```typescript
public putMappings(value: IResolvable | AccessApplicationScimConfigMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetDeactivateOnDelete` <a name="resetDeactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```typescript
public resetDeactivateOnDelete(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMappings` <a name="resetMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings"></a>

```typescript
public resetMappings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList">AccessApplicationScimConfigAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">deactivateOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput">idpUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput">remoteUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid">idpUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri">remoteUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication"></a>

```typescript
public readonly authentication: AccessApplicationScimConfigAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationList">AccessApplicationScimConfigAuthenticationList</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings"></a>

```typescript
public readonly mappings: AccessApplicationScimConfigMappingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | AccessApplicationScimConfigAuthentication[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>[]

---

##### `deactivateOnDeleteInput`<sup>Optional</sup> <a name="deactivateOnDeleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```typescript
public readonly deactivateOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpUidInput`<sup>Optional</sup> <a name="idpUidInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```typescript
public readonly idpUidInput: string;
```

- *Type:* string

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```typescript
public readonly mappingsInput: IResolvable | AccessApplicationScimConfigMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>[]

---

##### `remoteUriInput`<sup>Optional</sup> <a name="remoteUriInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```typescript
public readonly remoteUriInput: string;
```

- *Type:* string

---

##### `deactivateOnDelete`<sup>Required</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```typescript
public readonly deactivateOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid"></a>

```typescript
public readonly idpUid: string;
```

- *Type:* string

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessApplicationScimConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---


### AccessApplicationTargetCriteriaList <a name="AccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationTargetCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get"></a>

```typescript
public get(index: number): AccessApplicationTargetCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationTargetCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>[]

---


### AccessApplicationTargetCriteriaOutputReference <a name="AccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationTargetCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes">putTargetAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetAttributes` <a name="putTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```typescript
public putTargetAttributes(value: IResolvable | AccessApplicationTargetCriteriaTargetAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes">targetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">targetAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```typescript
public readonly targetAttributes: AccessApplicationTargetCriteriaTargetAttributesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `targetAttributesInput`<sup>Optional</sup> <a name="targetAttributesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```typescript
public readonly targetAttributesInput: IResolvable | AccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationTargetCriteria;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>

---


### AccessApplicationTargetCriteriaTargetAttributesList <a name="AccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationTargetCriteriaTargetAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```typescript
public get(index: number): AccessApplicationTargetCriteriaTargetAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationTargetCriteriaTargetAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>[]

---


### AccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="AccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```typescript
import { accessApplication } from '@cdktf/provider-cloudflare'

new accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessApplicationTargetCriteriaTargetAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>

---



